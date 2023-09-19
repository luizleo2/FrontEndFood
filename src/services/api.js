import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodapi-bb2k.onrender.com'
});
