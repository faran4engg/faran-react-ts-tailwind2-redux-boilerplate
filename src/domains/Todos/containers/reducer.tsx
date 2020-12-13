import * as actionTypes from './constants';
import { TodosActions, TodosState } from './types';

export const initialState: TodosState = {
  loading: false,
  todos: [],
};

const todosReducer = (state = initialState, action: TodosActions) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case actionTypes.FETCH_TODOS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default todosReducer;
