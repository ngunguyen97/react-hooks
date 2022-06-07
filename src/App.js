import { useState, useCallback, memo } from 'react';
import './App.css';
import Content from './Content';
import Count from './Count';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo']);
  }, []);

  return (
    <>
      <Content todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        <Count />
      </div>
    </>
  );
}

export default App;
