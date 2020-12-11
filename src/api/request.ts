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
    const result = await callback();
    const { data, status } = result;
    return { data, error: false, message: 'OK', status: status };
  } catch (err) {
    if (!err.response) return { data: err, error: true, message: err.message, status: 400 };
    const { data, status } = err.response;
    const message = Array.isArray(data.errors) ? data.errors[0].msg || data.errors[0] : data.errors;
    return { data, error: true, message, status: status };
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
