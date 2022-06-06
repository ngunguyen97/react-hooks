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

import { useEffect, useLayoutEffect, useState } from 'react';

function Content() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log('run useEffect');
    if (count > 1) {
      console.log(`useLayoutEffect setCount`);
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    console.log(`handleRun setCount`);
    setCount((preState) => preState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}
export default Content;

// Lesson: useLayoutEffect() hook?
