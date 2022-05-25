//2. Actions
export const inputChange = (payload) => {
  return {
    type: 'INPUT_CHANGE',
    payload: payload,
  };
};

export const addJob = (payload) => {
  return {
    type: 'ADD_JOB',
    payload: payload,
  };
};

export const deleteJob = (payload) => {
  return {
    type: 'DETELE_JOB',
    payload: payload,
  };
};
