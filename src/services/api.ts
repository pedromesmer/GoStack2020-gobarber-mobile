import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.16.46.194:3333',
});

export default api;
