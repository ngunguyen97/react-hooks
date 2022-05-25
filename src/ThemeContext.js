import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  const themeContextData = {
    theme,
    handleToggle,
  };

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
      {/* {console.log(children)} */}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
