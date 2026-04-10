import { create } from 'zustand';
import { axiosInstance } from '../api/axiosInstance';

const useCategoryStore = create((set) => ({
  categories: [],
  isLoading: false,
  error: null,

  // Thunk Action to fetch categories
  fetchCategories: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get('/categories');
      set({ categories: response.data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useCategoryStore;