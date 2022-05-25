import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Paragraph() {
  const { theme } = useContext(ThemeContext);
  return (
    <p className={theme}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem exercitationem culpa cum
      doloremque dolorem possimus, nobis illum eum tempora recusandae, porro commodi unde incidunt
      optio, aperiam minima qui! Perspiciatis, optio?
    </p>
  );
}
export default Paragraph;
