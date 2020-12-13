import { ReactNode } from 'react';
import { TodosAPI } from '@apis/types';
import * as actionTypes from './constants';

export interface TodosState {
  todos: TodosAPI[];
  loading: boolean;
}

type ChildrenProps = Pick<TodosState, 'todos'> & {
  isLoading: boolean;
};

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}
export interface FetchTodosStartAction {
  type: typeof actionTypes.FETCH_TODOS_START;
}

export interface FetchTodosSuccessAction {
  type: typeof actionTypes.FETCH_TODOS_SUCCESS;
  payload: TodosAPI[];
}
export interface FetchTodosFailedAction {
  type: typeof actionTypes.FETCH_TODOS_FAILED;
}

export type TodosActions =
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | FetchTodosFailedAction;
