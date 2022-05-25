import { useState } from 'react';
import './App.css';

const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard'];

function App() {
  const [gift, setGift] = useState('');

  const handleRandomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div className="App">
      {gift ? <h1>{gift}</h1> : <h1>No gifts</h1>}

      <button onClick={handleRandomGift}>Get reward</button>
    </div>
  );
}

export default App;
