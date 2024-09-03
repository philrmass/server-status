export function toDuration(totalSec) {
  const secPerMin = 60;
  const minPerHr = 60;

  const totalMin = Math.floor(totalSec / secPerMin);
  const hr = Math.floor(totalMin / minPerHr);
  const min = totalMin - (hr * minPerHr);
  const sec = totalSec - (totalMin * secPerMin);

  const minPad = hr > 0 ? 2 : 1;
  const minStr = min.toFixed(0).padStart(minPad, '0');
  const secStr = sec.toFixed(0).padStart(2, '0');

  if (hr > 0) {
    return `${hr}:${minStr}:${secStr}`;
  }
  return `${minStr}:${secStr}`;
}

function getDescription(entry, type) {
  if (type === 'song') {
    return null;
  } else if (type === 'album') {
    return `${entry.songs.length} songs`;
  } else if (type === 'artist') {
    const songs = entry.albums.reduce((sum, album) => sum + album.songs.length, 0);
    return `${entry.albums.length} albums, ${songs} songs`;
  }
}

function matchEntry(term, label, entry, type) {
  const lower = label.toLowerCase();
  const description = getDescription(entry, type);

  if (lower.includes(term)) {
    return [{
      description,
      entry,
      label,
      type,
    }];
  }
  return [];
}

function matchSongs(term, songs) {
  return songs.reduce((all, song) => [
    ...all,
    ...matchEntry(term, song.title, song, 'song'),
  ], []);
}

function matchAlbums(term, albums) {
  return albums.reduce((all, album) => [
    ...all,
    ...matchEntry(term, album.title, album, 'album'),
    ...matchSongs(term, album.songs),
  ], []);
}

export function findMatches(artists, search) {
  const term = search.toLowerCase();

  return artists.reduce((all, artist) => [
    ...all,
    ...matchEntry(term, artist.name, artist, 'artist'),
    ...matchAlbums(term, artist.albums),
  ], []);
}
