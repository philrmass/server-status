import { useState } from 'preact/hooks';
import classnames from 'classnames';
import { useInterval, useVisibility } from 'utilities/hooks';
import { toDuration } from '../utilities';

async function getStatus(address, port) {
  try {
    const url = `http://${address}:${port}/status`;
    const response = await fetch(url);
    const data = await response.json();

    return parseData(data);
  } catch(err) {
    return 'No Response';
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
        <span>{ item.title }, </span>
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
  if (typeof status === 'string') {
    return <div>{ status }</div>;
  }

  if (status.length === 0) {
    return <div>No Devices Found</div>;
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
  const [status, setStatus] = useState('Checking...');
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
      <span>{` ${port}`}</span>
      { renderStatus(status) }
    </section>
  );
}
