import { useState } from 'preact/hooks';
import classnames from 'classnames';
import { useInterval, useVisibility } from 'utilities/hooks';

async function getStatus(address, port) {
  try {
    const url = `http://${address}:${port}/status`;
    const response = await fetch(url);
    const data = await response.json();

    return parseData(data);
  } catch(err) {
    console.error(`Fetch error (${err})`);
    return null;
  }
}

function parseSong(status, track) {
  if (status !== 'playing') {
    return {};
  }

  const { album, artist, duration, title } = track;
  return { album, artist, duration, title };
}

function parseData(data) {
  const names = Object.keys(data).sort();
  return names.map((name) => {
    const item = data[name];
    const { currentState, currentTrack, volume } = item;
    const song = parseSong(currentState, currentTrack);

    return {
      name,
      state: currentState,
      volume,
      ...song,
    };
  });
}

export function toDuration(totalSec) {
  const secPerMin = 60;
  const minPerHr = 60;

  const totalMin = Math.floor(totalSec / secPerMin);
  const hr = Math.floor(totalMin / minPerHr);
  const min = totalMin - (hr * minPerHr);
  const sec = totalSec - (totalMin * secPerMin);

  const minPad = hr > 0 ? 2 : 1;
  const minStr = min.toFixed(0).padStart(minPad, '0');
  const secStr = sec.toFixed(0).padStart(2, '0');

  if (hr > 0) {
    return `${hr}:${minStr}:${secStr}`;
  }
  return `${minStr}:${secStr}`;
}

function renderName(item) {
  const classes = classnames({ playing: item.title });

  return (
    <div className="indent-1">
      <b>{item.name} </b>
      <span className={classes}>{item.state} </span>
      <span>{`(${item.volume})`}</span>
    </div>
  );
}

function renderSong(item) {
  if (!item.title) {
    return null;
  }

  return (
    <>
      <div className="indent-2">
        <span>{ item.title } </span>
        <span>{ toDuration(item.duration) }</span>
      </div>
      <div className="indent-2">
        <span>{ item.artist } / </span>
        <span>{ item.album }</span>
      </div>
    </>
  );
}

function renderStatus(status) {
  if (!status) {
    return null;
  }

  return (
    <div>
      { status.map((item) => (
        <div key={item.name}>
          { renderName(item) }
          { renderSong(item) }
        </div>
      ))}
    </div>
  );
}

export default function Sonos({ address, port }) {
  const [status, setStatus] = useState();
  const isVisible = useVisibility();
  const intervalMs = 2000;
  const interval = isVisible ? intervalMs : null;

  useInterval(() => {
    const update = async () => {
      setStatus(await getStatus(address, port));
    };

    update();
  }, interval);

  return (
    <section>
      <span className="title">Sonos Server</span>
      { renderStatus(status) }
    </section>
  );
}
