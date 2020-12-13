import { createSelectorHook } from 'react-redux';
import { TodosState } from '@containers/todos/types';

export type RootState = {
  todos: TodosState;
};

export const useSelector = createSelectorHook<RootState>();
