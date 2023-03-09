import { useState } from 'preact/hooks';
import { useInterval, useVisibility } from 'utilities/hooks';

async function getStatus(address, port) {
  try {
    const url = `http://${address}:${port}/status/Kitchen`;
    const response = await fetch(url);
    const data = await response.json();

    return parseData(data);
  } catch(err) {
    console.error(`Fetch error (${err})`);
    return null;
  }
}

function parseData(data) {
  return data.currentState;
}

function renderStatus(status) {
  return (
    <div>
      <span>{JSON.stringify(status, null, 2)}</span>
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
