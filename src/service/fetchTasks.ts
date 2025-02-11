import axios from 'axios';

export const fetchTasks = () => {
  const data = axios.get('https://jsonplaceholder.typicode.com/todos');
  return data;
};
