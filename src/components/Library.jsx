import { useState } from 'preact/hooks';

function toggle(lastValue, value) {
  if (value === lastValue) {
    return null;
  }
  return value;
}

function renderSongs(album, openAlbum) {
  if (album.title !== openAlbum) {
    return null;
  }

  return (
    <div className="indent-1">
      { album.songs.map((song) => (
        <div key={song.guid} className="ellipsis">
          <span>{ song.title }</span>
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
        <div key={album.guid}>
          <div className="ellipsis">
            <span onClick={() => setOpenAlbum(toggle(openAlbum, album.title))}>
              { album.title }
            </span>
          </div>
          { renderSongs(album, openAlbum) }
        </div>
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
          <div key={artist.guid}>
            <div className="ellipsis">
              <span onClick={() => handleArtistClick(artist.name)}>
                { artist.name }
              </span>
            </div>
            { renderAlbums(artist, openArtist, openAlbum, setOpenAlbum) }
          </div>
        ))}
      </div>
    </div>
  );
}
