import { useState } from 'react';
import './App.css';

const orders = [12, 13, 14];

function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce(
      (accumulatedValue, currentValue) => accumulatedValue + currentValue,
      0
    );

    return total;
  });

  const handleClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <h1>Hello useState</h1>
      <p>{counter}</p>
      <button onClick={handleClick}>Count</button>
    </div>
  );
}

export default App;
