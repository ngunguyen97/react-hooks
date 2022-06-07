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

import { memo } from 'react';

function Content({ todos, addTodo }) {
  console.log('child render');
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}
export default memo(Content);

// Lesson: useLayoutEffect() hook?
