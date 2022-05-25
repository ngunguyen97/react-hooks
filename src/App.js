import { useState } from 'react';
import './App.css';

const courses = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'ReactJS' },
];

function App() {
  const [checkedList, setCheckedList] = useState([]);

  console.log(checkedList);

  const handleSubmit = () => {
    // Call API
    console.log({ ids: checkedList });
  };

  const handleAddItem = (id) => {
    if (!checkedList.includes(id)) {
      setCheckedList((preState) => [...preState, id]);
    } else {
      const newCheckedList = checkedList.filter((item) => item !== id);
      setCheckedList(newCheckedList);
    }
  };

  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input type="checkbox" onChange={() => handleAddItem(course.id)} />
          <label>{course.name}</label>
        </div>
      ))}

      <button onClick={handleSubmit}>Get reward</button>
    </div>
  );
}

export default App;
