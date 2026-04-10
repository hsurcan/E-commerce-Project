import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../api/axiosInstance';
import useUserStore from '../store/useUserStore';

export const useAutoLogin = () => {
  const { setUser, logout } = useUserStore();
  const token = localStorage.getItem('token');

  return useQuery({
    queryKey: ['verifyUser'],
    queryFn: async () => {
      const response = await axiosInstance.get('/verify');
      return response.data;
    },
    enabled: !!token, // Sadece token varsa bu sorguyu çalıştır
    retry: false,     // Hata alırsa (token geçersizse) tekrar deneme
    onSuccess: (userData) => {
      setUser(userData); // Sunucudan gelen user objesini Zustand'a yaz
      // Token zaten interceptor ile header'da, localStorage'da da var.
    },
    onError: () => {
      logout(); // Token geçersizse her şeyi temizle
    }
  });
};