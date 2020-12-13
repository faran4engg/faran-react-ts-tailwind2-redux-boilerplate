import { TodosAPI } from '@apis/types';
import * as actionTypes from './constants';
import {
  FetchTodosFailedAction,
  FetchTodosStartAction,
  FetchTodosSuccessAction,
} from './types';

export const fetchTodosStart = (): FetchTodosStartAction => ({
  type: actionTypes.FETCH_TODOS_START,
});

export const fetchTodosSuccess = (
  todos: TodosAPI[]
): FetchTodosSuccessAction => ({
  payload: todos,
  type: actionTypes.FETCH_TODOS_SUCCESS,
});

export const fetchTodosFailed = (): FetchTodosFailedAction => ({
  type: actionTypes.FETCH_TODOS_FAILED,
});
