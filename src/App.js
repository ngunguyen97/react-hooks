import { useState } from 'react';
import './App.css';
import Content from './Content';

function App() {
  const [toggleBtn, setToggleBtn] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggleBtn(!toggleBtn)}>Toggle Mounted</button>
      {toggleBtn && <Content />}
    </div>
  );
}

export default App;
