import { useState } from 'react';
import './App.css';

const courses = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'ReactJS' },
];

function App() {
  const [checked, setChecked] = useState(-1);

  console.log(checked);

  const handleSubmit = () => {
    // Call API
    console.log({ id: checked });
  };

  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            onChange={() => setChecked(course.id)}
            checked={checked === course.id}
          />
          <label>{course.name}</label>
        </div>
      ))}

      <button onClick={handleSubmit}>Get reward</button>
    </div>
  );
}

export default App;
