import { useEffect, useCallback, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '@apis/calls';
import { RootState } from '@store/types';

import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailed,
} from './actions';

import { OwnProps, RenderProps } from './types';

const TodosContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos.todos);

  const isLoading = useSelector(
    (state: RootState): boolean => state.todos.loading
  );

  const getTodos = useCallback(async () => {
    try {
      const { data } = await getAllTodos();
      dispatch(fetchTodosSuccess(data));
    } catch (error) {
      dispatch(fetchTodosFailed());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosStart());
    const timeoutID = setTimeout(() => {
      getTodos(); // simulating delay jsut to show loaders :)
    }, 2000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [dispatch, getTodos]);

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        isLoading,
        todos,
      })}
    </div>
  );
};

export default TodosContainer;
