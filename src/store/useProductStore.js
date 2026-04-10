import { create } from 'zustand';
import { axiosInstance } from '../api/axiosInstance';

const useProductStore = create((set, get) => ({
  productList: [],
  total: 0,
  offset: 0,
  limit: 25,
  fetchState: 'IDLE',
  hasMore: true,

  // Initial fetch (reset list)
  setProductList: async (params = {}) => {
    set({ fetchState: 'FETCHING', offset: 0, productList: [] });
    try {
      const response = await axiosInstance.get('/products', { 
        params: { ...params, limit: 25, offset: 0 } 
      });
      set({ 
        productList: response.data.products, 
        total: response.data.total, 
        fetchState: 'FETCHED',
        hasMore: response.data.products.length >= 25 
      });
    } catch (err) { set({ fetchState: 'ERROR' }); }
  },

  currentProduct: null,

fetchProductById: async (productId) => {
  set({ fetchState: 'FETCHING' });
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    set({ currentProduct: response.data, fetchState: 'FETCHED' });
  } catch (err) {
    set({ fetchState: 'ERROR' });
  }
},

  // Load more (Infinite Scroll)
  loadMoreProducts: async (params = {}) => {
    const { productList, offset, limit, total } = get();
    if (productList.length >= total) return;

    const newOffset = offset + limit;
    set({ fetchState: 'FETCHING_MORE', offset: newOffset });

    try {
      const response = await axiosInstance.get('/products', { 
        params: { ...params, limit, offset: newOffset } 
      });
      set({ 
        productList: [...productList, ...response.data.products],
        fetchState: 'FETCHED',
        hasMore: productList.length + response.data.products.length < response.data.total
      });
    } catch (err) { set({ fetchState: 'ERROR' }); }
  }
}));

export default useProductStore;