/**
 * useEffect
 * 1. Update state
 * 2. mutated DOM
 * 3. re-render UI
 * 4. Call cleanup function if deps were changed.
 * 5. Call useEffect callback.
 */

/**
 * useLayoutEffect
 * 1. Update State
 * 2. Mutated DOM
 * 3. Call cleanup function if deps were changed.
 * 4. Call useEffect callback.
 * 5. Re-render UI
 */

import { useRef, useState } from 'react';

function Content() {
  const [count, setCount] = useState(60);
  const intervalId = useRef();
  const handleStart = () => {
    intervalId.current = setInterval(() => setCount((preState) => preState - 1), 1000);
    console.log(`setInterval`, intervalId.current);
  };

  const handleStop = () => {
    console.log(`clearInterval`, intervalId.current);
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Content;

// Lesson: useLayoutEffect() hook?
