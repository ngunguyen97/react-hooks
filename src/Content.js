/**
 * memo: Luu cac gia tri qua mot bien ben ngoai.
 * Su dung useCallback phai di kem voi memo
 */

import { useEffect, useState } from 'react';

function Content() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeEvent = () => {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResizeEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, []);

  return (
    <>
      <h1>{width}</h1>
    </>
  );
}
export default Content;
