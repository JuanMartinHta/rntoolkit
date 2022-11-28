import axios from 'axios';

export const URL_BASE = 'https://jsonplaceholder.typicode.com';

export const todoApi = axios.create({ baseURL: `${URL_BASE}/` });
