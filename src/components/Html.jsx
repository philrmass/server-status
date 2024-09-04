import { useState } from 'preact/hooks';
import { useInterval, useVisibility } from 'utilities/hooks';

async function getStatus(address, port) {
  try {
    const url = `http://${address}:${port}`;
    const response = await fetch(url);
    const site = await response.text();

    const tag = 'html';
    const start = site.indexOf('>', site.indexOf(`<${tag}`));
    const end = site.lastIndexOf(`</${tag}`);

    return {
      start,
      end,
      tag,
    };
  } catch(err) {
    return 'No Response';
  }
}

function capitalize(str) {
  const first = str.substring(0, 1).toUpperCase();
  const rest = str.substring(1);

  return `${first}${rest}`;
}

function renderStatus(status) {
  if (typeof status === 'string') {
    return <div>{ status }</div>;
  }

  return (
    <div className="indent-1">
      <b>{ capitalize(status.tag) } </b>
      <span>{ `${status.end - status.start} characters` }</span>
    </div>
  );
}

export default function Html({ name, address, port }) {
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
      <span className="title">{ `${name} Server` }</span>
      <span>{` ${port}`}</span>
      { renderStatus(status) }
    </section>
  );
}
