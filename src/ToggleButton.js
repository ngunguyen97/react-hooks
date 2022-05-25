import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ToggleButton() {
  const { handleToggle } = useContext(ThemeContext);
  return (
    <>
      <button onClick={handleToggle}>Toggle theme</button>
    </>
  );
}
