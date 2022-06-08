import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((preState) => [...preState, { name, price }]);
    setName('');
    setPrice('');
  };

  const total = useMemo(
    () =>
      items.reduce((acculumatedValue, currentValue) => {
        console.log('re-render');
        return acculumatedValue + currentValue.price * 1;
      }, 0),
    [items]
  );

  return (
    <>
      <div className="App">
        <input
          value={name}
          type="text"
          placeholder="Enter a name"
          onChange={(e) => setName(e.target.value)}
        />{' '}
        <br />
        <input
          value={price}
          type="text"
          placeholder="Enter an amount"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={addItem}>Add</button>
        <hr />
        <p>Total: {total}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
