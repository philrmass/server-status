import { useState } from 'preact/hooks';

export default function TextInput({
  placeholder,
  value,
  onChange,
}) {
  const [edited, setEdited] = useState(value);

  return (
    <input
      placeholder={placeholder}
      type="text"
      value={edited}
      onInput={(e) => setEdited(e.target.value)}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
