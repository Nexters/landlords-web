import axios from 'axios';

const baseURL = '';
export const axiosInstance = axios.create({
  baseURL,
});
