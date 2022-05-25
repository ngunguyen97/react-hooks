//1. An initial State
export const initalState = {
  job: '',
  jobs: [],
};

// 3. Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        job: action.payload,
      };
    case 'ADD_JOB':
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case 'DETELE_JOB':
      const newState = [...state.jobs].filter((el, index) => index !== action.payload);

      return {
        ...state,
        jobs: newState,
      };
    default:
      throw new Error('Invalid Action');
  }
};
export default reducer;
