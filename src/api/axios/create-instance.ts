import axios, { type AxiosRequestConfig } from "axios";
import { refreshToken } from "../services/auth.service";

export const createAxiosInstance = (config: AxiosRequestConfig) => {
  const axiosInstance = axios.create({ ...config });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      const isSessionExpired =
        error.response?.status === 401 &&
        error.response?.data?.message === "Authentication required";

      if (isSessionExpired && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          await refreshToken();

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);

          throw refreshError;
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
