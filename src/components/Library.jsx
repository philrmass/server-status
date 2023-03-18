import { useState } from 'preact/hooks';
import { detailGuid } from '../signals';

function toggle(lastValue, value) {
  if (value == lastValue) {
    return null;
  }
  return value;
}

function renderInfo(guid) {
  return (
    <span onClick={() => detailGuid.value = guid}>  (i)</span>
  );
}

function renderSongs(album, openAlbum) {
  if (album.title !== openAlbum) {
    return null;
  }

  return (
    <div className="indent-1">
      { album.songs.map((song) => (
        <div>
          <span>{ song.title }</span>
          { renderInfo(song.guid) }
        </div>
      ))}
    </div>
  );
}

function renderAlbums(artist, openArtist, openAlbum, setOpenAlbum) {
  if (artist.name !== openArtist) {
    return null;
  }

  return (
    <div className="indent-1">
      {artist.albums.map((album) => (
        <>
          <div>
            <span onClick={() => setOpenAlbum(toggle(openAlbum, album.title))}>
              { album.title }
            </span>
            { renderInfo(album.guid) }
          </div>
          { renderSongs(album, openAlbum) }
        </>
      ))}
    </div>
  );
}

export default function Library({ artists }) {
  const [openArtist, setOpenArtist] = useState(null);
  const [openAlbum, setOpenAlbum] = useState(null);

  const handleArtistClick = (name) => {
    setOpenArtist(toggle(openArtist, name));
    setOpenAlbum(null);
  };

  return (
    <div className="margin-top">
      <b>Library</b>
      <div className="artists">
        {artists?.map((artist) => (
          <>
            <div>
              <span onClick={() => handleArtistClick(artist.name)}>
                { artist.name }
              </span>
              { renderInfo(artist.guid) }
            </div>
            { renderAlbums(artist, openArtist, openAlbum, setOpenAlbum) }
          </>
        ))}
      </div>
    </div>
  );
}
