import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const { REACT_APP_DEVELOPMENT_API_URL, REACT_APP_AUTHORIZATION_TOKEN } = process.env;

const axiosInstance = axios.create({
  baseURL: `${REACT_APP_DEVELOPMENT_API_URL}/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json; charset=utf-8',
    Authorization: REACT_APP_AUTHORIZATION_TOKEN,
  },
});

const execute = async <T>(callback: () => Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const { data, status } = await callback();
    return { ...data, isSuccess: status === 200 };
  } catch (err) {
    const { response } = err;
    return { ...response, isSuccess: false };
  }
};

export default {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const callback = () => axiosInstance.get<T>(url, config);
    const response = await execute<T>(callback);
    return response;
  },
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const callback = () => axiosInstance.delete<T>(url, config);
    const response = await execute<T>(callback);
    return response;
  },
  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const callback = () => axiosInstance.post<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const callback = () => axiosInstance.put<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const callback = () => axiosInstance.patch<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
};
