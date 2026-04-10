import { axiosInstance } from './axiosInstance';

export const fetchProducts = async (categoryId = null) => {
  const endpoint = categoryId ? `/products?category=${categoryId}` : '/products';
  const response = await axiosInstance.get(endpoint);
  return response.data;
};