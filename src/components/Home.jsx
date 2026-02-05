import { useLocalStorage } from 'utilities/hooks';
import { version } from '../../package.json';
import Html from './Html';
import Music from './Music';
import Sonos from './Sonos';
import Status from './Status';

// ??? add a logo: bright blue, black server, red/green lights
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
      <Music
        address={address}
        port={7777}
      />
      <Html
        address={address}
        name="Junco"
        port={3333}
      />
      <Html
        address={address}
        name="Finch"
        port={8888}
      />
      <Html
        address={address}
        name="Lark"
        port={9999}
      />
      <section className="version">
        <span>{ `v${version}` }</span>
      </section>
    </div>
  );
}
