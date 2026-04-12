import { create } from 'zustand';

const useFavoriteStore = create((set, get) => ({
  favorites: [],

  toggleFavorite: (product) => {
    const { favorites } = get();
    const isExist = favorites.find(item => item.id === product.id);

    if (isExist) {
      // Eğer zaten favorilerdeyse: ÇIKAR
      set({ favorites: favorites.filter(item => item.id !== product.id) });
    } else {
      // Eğer favorilerde değilse: EKLE
      const favoriteItem = {
        id: product.id,
        name: product.name || product.title,
        price: product.price,
        image: product.images?.[0]?.url || product.thumbnail,
      };
      set({ favorites: [...favorites, favoriteItem] });
    }
  },

  removeFromFavorites: (productId) => {
    set({ favorites: get().favorites.filter(item => item.id !== productId) });
  },

  clearFavorites: () => set({ favorites: [] })
}));

export default useFavoriteStore;