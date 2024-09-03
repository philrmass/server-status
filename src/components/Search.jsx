import { useEffect, useState } from 'preact/hooks';
import { findMatches } from '../utilities';

function renderResult(result) {
  return (
    <div key={result.entry.guid}>
      <div className="ellipsis">
        { result.label }
        <span>
          { result.description && `, ${result.description}` }
        </span>
      </div>
    </div>
  );
}

function renderResults(results) {
  if (results.length === 0) {
    return null;
  }

  if (results.length <= 50) {
    return (
      <div className="indent-2 pad-top results">
        { results.map((result) => renderResult(result)) }
      </div>
    );
  }

  return (
    <div className="indent-2">
      { `${results.length} matches found` }
    </div>
  );
}

export default function Search({ artists }) {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search || !artists) {
      setResults([]);
    } else {
      setResults(findMatches(artists, search));
    }
  }, [artists, search]);

  if (!artists) {
    return null;
  }

  return (
    <>
      <div>
        <b className="indent-1">Search</b>
        <span className="indent-1">
          <input
            placeholder="Enter text here"
            type="text"
            value={search}
            onInput={(e) => setSearch(e.target.value)}
          />
          { search && (
            <button onClick={() => setSearch('')}>x</button>
          ) }
        </span>
      </div>
      { renderResults(results) }
    </>
  );
}
