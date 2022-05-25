import { SET_TODO_INPUT, ADD_ITEM_TO_TODOS, CLEAR_INPUT_FIELD } from './constants';
const initialState = {
  todoInput: '',
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_ITEM_TO_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case CLEAR_INPUT_FIELD:
      return {
        ...state,
        todoInput: '',
      };
    default:
      return state;
  }
};
export { initialState };
export default reducer;
