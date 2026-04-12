import { create } from 'zustand';
import { axiosInstance } from '../api/axiosInstance';

const useUserStore = create((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,

  setUser: (userData) => set({ 
    user: userData, 
    isLoggedIn: !!userData 
  }),

  //registeration post isteği
  registerUser: async (formData) => {
    try {
      const response = await axiosInstance.post('/auth/signup', formData);
      return response.data;
    } catch (err) { console.error(err); }
  },

  loginUser: async (credentials) => {
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      const { token, ...userData } = response.data;
      
      localStorage.setItem('token', token); // Store Token
      set({ user: userData, isLoggedIn: true }); // Store User Data
    } catch (err) { console.error("Login failed", err); }
  },

  logout: () => {
    set({ user: null, token: null, isLoggedIn: false });
    localStorage.removeItem('token');
  },
}));

export default useUserStore;