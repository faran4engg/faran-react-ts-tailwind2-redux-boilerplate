import { combineReducers } from 'redux';
import todosReducer from '@containers/todos/reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
});
