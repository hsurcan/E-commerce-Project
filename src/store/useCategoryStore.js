import { create } from 'zustand';
import { axiosInstance } from '../api/axiosInstance';

const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,

  fetchCategories: async () => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get('/categories');
      set({ categories: response.data, loading: false });
    } catch (err) {
      console.error("Kategori çekme hatası:", err);
      set({ loading: false });
    }
  },
}));

export default useCategoryStore;