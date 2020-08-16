import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Response } from 'entity/response';

import { apiBaseURL } from './constants';

const axiosInstance = axios.create({
  baseURL: `${apiBaseURL}/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json; charset=utf-8',
    Authorization: sessionStorage.getItem('accessToken'),
  },
});

export const setAuthorization = (token: string) => {
  axiosInstance.defaults.headers['Authorization'] = token;
};

const execute = async <T>(callback: () => Promise<AxiosResponse<T>>): Promise<Response<T>> => {
  try {
    const { data } = await callback();
    return { data, error: false, message: 'OK' };
  } catch (err) {
    const { data } = err.response;
    return { data, error: true, message: data.errors };
  }
};

export default {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
    const callback = () => axiosInstance.get<T>(url, config);
    const response = await execute<T>(callback);
    return response;
  },
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
    const callback = () => axiosInstance.delete<T>(url, config);
    const response = await execute<T>(callback);
    return response;
  },
  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
    const callback = () => axiosInstance.post<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
    const callback = () => axiosInstance.put<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
    const callback = () => axiosInstance.patch<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
};
