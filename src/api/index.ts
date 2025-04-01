import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return instance.get(url, config);
};
