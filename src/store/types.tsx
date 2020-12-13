import { createSelectorHook } from 'react-redux';
import { TodosState } from '@domains/Todos/containers/types';

export type RootState = {
  todos: TodosState;
};

export const useSelector = createSelectorHook<RootState>();
