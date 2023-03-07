import { useEffect, useState } from 'preact/hooks';
import styles from './TextInput.module.css';

export default function TextInput({
  value,
  onChange,
}) {
  const [edited, setEdited] = useState(value);

  useEffect(() => {
    setEdited(value);
  }, [value]);

  const handleBlur = () => {
    setEdited(value);
  };

  const handleKeyDown = (e) => {
    switch(e.key) {
      case 'Enter':
        onChange(edited);
        document.activeElement.blur();
        return;
      case 'Escape':
      case 'Tab':
        document.activeElement.blur();
    }
  };

  return (
    <input
      type="text"
      className={styles.input}
      value={edited}
      onBlur={() => handleBlur()}
      onInput={(e) => setEdited(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
