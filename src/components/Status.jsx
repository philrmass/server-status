import { useState } from 'preact/hooks';
import { useInterval, useVisibility } from 'utilities/hooks';
import TextInput from './TextInput';

function getTime(now) {
  return (Math.round(now / 1000) % 100);
}

export default function Status({ address, setAddress }) {
  const [time, setTime] = useState(getTime(Date.now()));
  const isVisible = useVisibility();
  const intervalMs = 1000;
  const interval = isVisible ? intervalMs : null;

  useInterval(() => {
    setTime(getTime(Date.now()));
  }, [interval]);

  return (
    <section>
      <span className="title">Server Status </span>
      <span>{ time }</span>
      <div>
        <TextInput 
          value={address}
          onChange={(value) => setAddress(value)}
        />
      </div>
    </section>
  );
}
