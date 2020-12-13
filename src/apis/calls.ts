import { AxiosResponse } from 'axios';
import todosInstance from '@axios/todos-instance';

import { TodosAPI } from './types';

const getAllTodos = (): Promise<AxiosResponse<TodosAPI[]>> =>
  todosInstance.get('/todos');

export { getAllTodos };
