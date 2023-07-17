import axios from 'axios';

const apiNode = axios.create({
  baseURL: import.meta.env.VITE_URL_API_NODE,
});

export { apiNode };
