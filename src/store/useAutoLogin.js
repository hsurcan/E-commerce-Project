import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../api/axiosInstance';
import useUserStore from '../store/useUserStore';

export const useAutoLogin = () => {
  const { setUser, logout } = useUserStore();
  const token = localStorage.getItem('token');

  const query = useQuery({
    queryKey: ['verifyUser'],
    queryFn: async () => {
      const response = await axiosInstance.get('/verify');
      return response.data;
    },
    enabled: !!token,
    retry: false,
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data);
    }
    if (query.isError) {
      logout();
    }
  }, [query.data, query.isError, setUser, logout]);

  return query;
};