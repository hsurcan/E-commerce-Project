import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);