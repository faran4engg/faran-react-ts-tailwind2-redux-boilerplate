import axios from 'axios';

const todosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default todosInstance;
