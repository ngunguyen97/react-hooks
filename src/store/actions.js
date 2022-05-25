import { SET_TODO_INPUT, ADD_ITEM_TO_TODOS, CLEAR_INPUT_FIELD } from './constants';

export const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};

export const addItemTodo = (payload) => {
  return {
    type: ADD_ITEM_TO_TODOS,
    payload,
  };
};

export const clearInputField = () => {
  return {
    type: CLEAR_INPUT_FIELD,
  };
};
