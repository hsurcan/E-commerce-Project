import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],

//ADD
  addToCart: (product) => {
    const currentCart = get().cart;
    const existingItem = currentCart.find(item => item.id === product.id);

    if (existingItem) {       // Eğer ürün zaten sepette varsa count artır
      set({
        cart: currentCart.map(item =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      });
    } else {                

      const newProduct = {
        id: product.id,
        name: product.name, 
        price: product.price,
        image: product.images?.[0]?.url || product.thumbnail,
        count: 1,
        checked: true 
      };
      
      set({ cart: [...currentCart, newProduct] });
    }
  },

//REMOVE
  removeFromCart: (productId) => {
    set({ cart: get().cart.filter(item => item.id !== productId) });
  },
//UPDATE
  updateCount: (productId, delta) => {
    set({
      cart: get().cart.map(item => 
        item.id === productId ? { ...item, count: Math.max(1, item.count + delta) } : item
      )
    });
  },

//CLEAR
  clearCart: () => set({ cart: [] })
}));

export default useCartStore;