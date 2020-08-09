import { apiBaseURL } from 'api/constants';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Response } from 'entity/response';;

type AxiosCallback<T extends Response> = () => Promise<AxiosResponse<T>>;

axios.defaults.baseURL = `${apiBaseURL}/v1/`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const execute = async <T extends Response>(callback: AxiosCallback<T>): Promise<T> => {
  try {
    const { data, status } = await callback();
    return { ...data, isSuccess: status === 200 };
  } catch (err) {
    const { response } = err;
    return { ...response, isSuccess: false };
  }
};

export default {
  async get<T extends Response>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const callback = () => axios.get<T>(url, config);
    const response = await execute<T>(callback);
    return response;
  },
  async delete<T extends Response>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const callback = () => axios.delete<T>(url, config);
    const response = await execute<T>(callback);
    return response;
  },
  async post<T extends Response>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const callback = () => axios.post<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
  async put<T extends Response>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const callback = () => axios.put<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
  async patch<T extends Response>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const callback = () => axios.patch<T>(url, data, config);
    const response = await execute<T>(callback);
    return response;
  },
};
