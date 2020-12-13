import { combineReducers } from 'redux';
import { todosReducer } from '@domains/Todos/containers';

export const rootReducer = combineReducers({
  todos: todosReducer,
});
