import { useRef, useState } from 'react';
import './App.css';

function App() {
  const todoInputRef = useRef(null);
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);

  const handleSubmit = () => {
    setTodos((preState) => {
      const newTodos = [...preState, todoInput];
      //Save todos on localStorage.
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
    setTodoInput('');
    todoInputRef.current.focus();
  };

  return (
    <div className="App">
      <input
        ref={todoInputRef}
        type="text"
        placeholder="Enter a todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      {todos.map((todo, index) => (
        <h1 key={index}>{todo}</h1>
      ))}
    </div>
  );
}

export default App;
