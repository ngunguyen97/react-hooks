import { useReducer, useRef } from 'react';

import { inputChange, addJob, deleteJob } from './Todo.action';
import reducer, { initalState } from './todo.reducer';
import logger from './logger';

export default function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initalState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleClickAddBtn = () => {
    dispatch(addJob(job));
    dispatch(inputChange(''));
    inputRef.current.focus();
  };

  const handleDeletedItem = (job) => {
    dispatch(deleteJob(job));
  };

  return (
    <>
      <h1>To-Do</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter a to-do..."
        onChange={(e) => {
          dispatch(inputChange(e.target.value));
        }}
      />
      <button onClick={handleClickAddBtn}>Add</button>
      <ul onClick={handleDeletedItem}>
        {jobs.map((job, index) => (
          <li
            key={index}
            onClick={() => {
              handleDeletedItem(index);
            }}
          >
            {job} &times;
          </li>
        ))}
      </ul>
    </>
  );
}
