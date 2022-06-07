import { memo, useCallback, useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  console.log('Count render');
  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
    </>
  );
};

export default memo(Count);
