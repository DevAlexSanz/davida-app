import axios, { type AxiosRequestConfig } from "axios";

export const createAxiosInstance = (config: AxiosRequestConfig) => {
  const axiosInstance = axios.create({ ...config });

  return axiosInstance;
};
