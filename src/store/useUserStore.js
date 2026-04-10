import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,

  // Login olduğunda hem user hem token set edilecek
  setUser: (userData, token) => {
    set({ user: userData, token: token, isLoggedIn: true });
    if (token) {
      localStorage.setItem('token', token);
    }
  },

  // Logout veya Token geçersizse temizle
  logout: () => {
    set({ user: null, token: null, isLoggedIn: false });
    localStorage.removeItem('token');
  },
}));

export default useUserStore;