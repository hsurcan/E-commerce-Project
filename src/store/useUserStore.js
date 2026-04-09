import {create} from 'zustand';

const useUserStore = create((set) => ({
  //Initial state
  user: null,
  isLoggedIn: false,
  //Actions
  setUser: (userData) => set({user: userData, isLoggedIn: true}),
  logout: () => set({user: null, isLoggedIn: false}),
}));

export default useUserStore;