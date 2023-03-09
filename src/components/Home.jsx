import { useLocalStorage } from 'utilities/hooks';
import { version } from '../../package.json';
import Sonos from './Sonos';
import Status from './Status';

// ??? add /status to sonos-server to get status of all devices
// ??? parse actual time
export default function Home() {
  const defaultAddress = '192.168.1.2';
  const [address, setAddress] = useLocalStorage('stAddress', defaultAddress);

  return (
    <div className="home">
      <Status
        address={address}
        setAddress={setAddress}
      />
      <Sonos
        address={address}
        port={5555}
      />
      <section className="version">
        <span>{ `v${version}` }</span>
      </section>
    </div>
  );
}
