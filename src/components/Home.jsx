import { useState } from 'preact/hooks';
import { version } from '../../package.json';
import TextInput from './TextInput';
import styles from './Home.module.css';

// ??? add /status to sonos-server to get status of all devices
// ??? add sonos section, useInterval(1000)
export default function Home() {
  const defaultAddress = '192.168.1.2';
  // ???? useLocalStorage
  const [address, setAddress] = useState(defaultAddress);
  console.log('address', address);

  return (
    <div className={styles.home}>
      <section>
        <span className={styles.title}>Server Status </span>
        <div>
          <TextInput 
            value={address}
            onChange={(value) => setAddress(value)}
          />
        </div>
      </section>
      <section>
        <div>
          <label for="pet-select">Choose a pet:</label>
          <select name="pets" id="pet-select">
            <option value="">Please choose an option</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
      </section>
      <section className={styles.version}>
        <span>{ `v${version}` }</span>
      </section>
    </div>
  );
}
/*
import { TRIMET_API_KEY } from '../.env';

const TRIMET_URL = 'https://developer.trimet.org/ws/V2/arrivals?json=true&minutes=30&showPosition=false&';
const MS_PER_MIN = 60 * 1000;

export async function getArrivals(stopId, cache, useCache = true) {
  const now = Date.now();
  const last = useCache && cache.get(stopId, now);

  try {
    if (last) {
      return parseArrivals(last, now);
    }

    const response = await fetch(getUrl(stopId));
    const data = await response.json();

    cache.set(stopId, now, data);

    return parseArrivals(data, now);
  } catch (e) {
    console.error(`Fetch error (${e})`);
    return [];
  }
}
*/
