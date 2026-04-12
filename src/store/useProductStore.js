import { create } from 'zustand';
import { axiosInstance } from '../api/axiosInstance';

const useProductStore = create((set, get) => ({
  productList: [],
  currentProduct: null,
  total: 0,
  filterText: "",
  fetchState: 'IDLE',

  setFilterText: (text) => set({ filterText: text }),

  // GET Products
  fetchProducts: async (params = {}) => {
    set({ fetchState: 'FETCHING' });
    try {
      let url = '/products';
      if (params.category) {
        url = `/products/category/${params.category}`;
      } else if (params.filter) {
        url = `/products/search?q=${params.filter}`;
      }

      const response = await axiosInstance.get(url, {
        params: {
          limit: params.limit || 12,
          skip: 0, // Yeni aramada/filtrede en baştan başla
        }
      });

      set({ 
        productList: response.data.products, 
        total: response.data.total, 
        fetchState: 'FETCHED' 
      });
    } catch (error) {
      set({ fetchState: 'ERROR' });
      console.error("Load Error:", error);
    }
  },

  //LOAD MORE PRODUCTS
  loadMoreProducts: async (params = {}) => {
    const { productList, total, fetchState } = get();

    if (fetchState === 'FETCHING') return;
    
    if (total > 0 && productList.length >= total) return;

    set({ fetchState: 'FETCHING' });
    try {
      let url = '/products';
      if (params.category) {
        url = `/products/category/${params.category}`;
      } else if (params.filter) {
        url = `/products/search?q=${params.filter}`;
      }

      const response = await axiosInstance.get(url, {
        params: {
          limit: 12,
          skip: productList.length, 
          ...params
        }
      });

      const newProducts = response.data.products || [];
      
      set({ 
        productList: [...productList, ...newProducts], 
        total: response.data.total, 
        fetchState: 'FETCHED' 
      });
    } catch (error) {
      set({ fetchState: 'ERROR' });
      console.error("Load More Error:", error);
    }
  },

  //SORT PRODUCTS

  setSortOption: (option) => {
    const { productList } = get();
    let sortedList = [...productList];

    switch (option) {
      case "price-low":
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case "rating-high":
        sortedList.sort((a, b) => b.rating - a.rating);
        break;
      case "rating-low":
        sortedList.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    set({ productList: sortedList });
  },

  fetchProductById: async (id) => {
    set({ fetchState: 'FETCHING' });
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      set({ currentProduct: response.data, fetchState: 'FETCHED' });
    } catch (error) {
      set({ fetchState: 'ERROR' });
      console.error("Product Fetch Error:", error);
    }
  }
}));

export default useProductStore;