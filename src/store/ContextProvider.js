import { useReducer } from 'react';
import Context from './Context';
import reducer, { initialState } from './reducer';

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextData = [state, dispatch];
  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
export default ContextProvider;
