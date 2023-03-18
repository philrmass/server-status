import { useEffect, useState } from 'preact/hooks';

// ??? move to a utility
async function getEntry(baseUrl, guid) {
  try {
    const response = await fetch(`${baseUrl}/entries/${guid}`);
    return await response.json();
  } catch (err) {
    return null;
  }
}

function renderEntry(entry) {
  return (
    <div>
      ENTRY
      { JSON.stringify(entry).length }
    </div>
  );
}

export default function Detail({ baseUrl, detailGuid }) {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (detailGuid.value) {
      const update = async () => {
        const val = await getEntry(baseUrl, detailGuid.value);
        setEntry(val);
        console.log(' val', val);
      };

      update();
    }
  }, [detailGuid.value]);

  if (!detailGuid.value) {
    return null;
  }

  return (
    <div className="entry">
      <div className="entry-content">
        { renderEntry(entry) }
        <div className="entry-controls">
          <button onClick={() => detailGuid.value = null}>
            <b>OK</b>
          </button>
        </div>
      </div>
    </div>
  );
}
