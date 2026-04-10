import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // YENİ APİ EKLE
});

// Interceptor ile token otomatik eklenir
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token; 
  }
  return config;
});