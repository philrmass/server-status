import { useEffect, useState } from 'preact/hooks';
import { useInterval, useVisibility } from 'utilities/hooks';
import { toDuration } from '../utilities';
import Library from './Library';

function pickRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
}

function getAllSongGuids(artists) {
  if (!artists) {
    return [];
  }

  return artists.reduce((all, artist) => {
    const artistGuids = artist.albums.reduce((all, album) => {
      const albumGuids = album.songs.map((song) => song.guid);

      return [...all, ...albumGuids];
    }, []);
    return [...all, ...artistGuids];
  }, []);
}

async function getArtists(baseUrl) {
  try {
    const response = await fetch(`${baseUrl}/artists`);
    return await response.json();
  } catch (err) {
    return null;
  }
}

async function getSong(baseUrl, guid) {
  try {
    const response = await fetch(`${baseUrl}/entries/${guid}`);
    return await response.json();
  } catch (err) {
    return null;
  }
}

async function getRandomSong(songGuids, baseUrl) {
  if (songGuids?.length > 0) {
    const guid = pickRandom(songGuids);
    return await getSong(baseUrl, guid);
  }
}

function renderSong(song) {
  if (!song) {
    return null;
  }

  return (
    <div className="margin-top">
      <b>Random Song</b>
      <div className="indent-2 ellipsis">
        <span>{ song.title }, </span>
        <span>{ toDuration(song.duration) }</span>
      </div>
      <div className="indent-2 ellipsis">
        <span>{ song.artist } / </span>
        <span>{ song.album }</span>
      </div>
    </div>
  );
}

export default function Music({ address, port }) {
  const baseUrl = `http://${address}:${port}`;
  const isVisible = useVisibility();
  const [artists, setArtists] = useState();
  const [songGuids, setSongGuids] = useState([]);
  const [song, setSong] = useState();
  const intervalMs = 10000;
  const interval = isVisible ? intervalMs : null;

  useEffect(() => {
    (async () => setSong(await getRandomSong(songGuids, baseUrl)))();
  }, [songGuids, baseUrl]);

  useEffect(() => {
    const run = async () => {
      if (!artists) {
        const data = await getArtists(baseUrl);
        setArtists(data);
        setSongGuids(getAllSongGuids(data));
      }
    };

    run();
  }, [baseUrl, artists]);

  useInterval(() => {
    (async () => setSong(await getRandomSong(songGuids, baseUrl)))();
  }, interval);

  return (
    <>
      <section>
        <span className="title">Music Server</span>
        <span>{` ${port}`}</span>
        { renderSong(song) }
        <Library artists={artists} />
      </section>
    </>
  );
}
