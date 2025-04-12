import { useState } from 'preact/hooks';
import { useInterval, useVisibility } from 'utilities/hooks';
import { toDuration } from '../utilities';
import Search from './Search';

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

export function countSongs(artists) {
  if (!artists) {
    return 0;
  }

  return artists.reduce((sum, artist) => (
    sum + artist.albums.reduce((count, album) => (
      count + album.songs.length
    ), 0)
  ), 0);
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
    const response = await fetch(`${baseUrl}/songs/${guid}`);
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

function renderLibrary(artists) {
  if (typeof artists === 'undefined') {
    return <div>Checking...</div>;
  }

  if (artists === null) {
    return <div>No Response.</div>;
  }

  const artistCount = artists?.length;
  const songCount = countSongs(artists);

  return (
    <div className="indent-1">
      <b>Library </b>
      <span>{`${artistCount} artists, ${songCount} songs`}</span>
    </div>
  );
}

function renderSong(song) {
  if (!song) {
    return null;
  }

  return (
    <div>
      <b className="indent-1">Random Song</b>
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

  const setArtistData = (response) => {
    if (response === null) {
      setArtists(null);
    } else {
      setArtists(response);
      setSongGuids(getAllSongGuids(response));
    }
  };

  useInterval(() => {
    const update = async () => {
      if (!artists || !song) {
        setArtistData(await getArtists(baseUrl));
      }
      setSong(await getRandomSong(songGuids, baseUrl));
    };

    update();
  }, interval);

  return (
    <section>
      <span className="title">Music Server</span>
      <span>{` ${port}`}</span>
      { renderLibrary(artists) }
      <Search artists={artists} />
      { renderSong(song) }
    </section>
  );
}
