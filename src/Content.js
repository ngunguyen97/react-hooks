/**
 * memo: Luu cac gia tri qua mot bien ben ngoai.
 * Su dung useCallback phai di kem voi memo
 */

import { useEffect, useState } from 'react';

function Content() {
  const [countdown, setCountDown] = useState(180);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((preState) => preState - 1);
    }, 1000);

    return () => {
      console.log('clear Interval');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>{countdown}</h1>
    </>
  );
}
export default Content;
