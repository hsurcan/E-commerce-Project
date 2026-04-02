import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
  // Görseldeki sepet veya kategori filtreleri için burayı kullanacağız
}))

export default useProductStore