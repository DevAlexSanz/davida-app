import { createAxiosInstance } from "../axios/create-instance";

export const axiosInstance = createAxiosInstance({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
