import useFavoriteStore from '../store/useFavoriteStore';
import useCartStore from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingCart, FiChevronLeft } from 'react-icons/fi';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavoriteStore();
  const addToCart = useCartStore((state) => state.addToCart);

  let content;

  if (!favorites || favorites.length === 0) {

    content = (
      <div className="py-20 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4 text-dark-blue">Your wishlist is empty</h2>
        <p className="text-second-text mb-8">Tap the heart icon on products to save them for later!</p>
        <Link to="/shop" className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-3 rounded-md font-bold hover:bg-dark-blue transition-all">
          <FiChevronLeft /> Browse Products
        </Link>
      </div>
    );
  } else {

    // Favori ürünler listesi
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeIn">
        {favorites.map((item) => {
          const itemPrice = Number(item?.price || 0).toFixed(2);
          const itemImage = item?.images?.[0]?.url || item?.thumbnail || item?.image;

          return (
            <div key={item.id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <img 
                  src={itemImage} 
                  alt={item?.name || "Product"} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=No+Image'; }} 
                />
                <button 
                  onClick={() => removeFromFavorites(item.id)}
                  className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-red-500 shadow-md hover:bg-red-500 hover:text-white transition-all z-10"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
              
              <div className="p-4 flex flex-col flex-grow gap-2">
                <h4 className="font-bold text-dark-blue truncate text-sm">{item.name}</h4>
                <p className="text-primary-blue font-bold text-lg">${itemPrice}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="mt-auto w-full bg-primary-blue text-white py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 hover:bg-dark-blue transition-all shadow-md"
                >
                  <FiShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8 text-dark-blue border-b pb-4">
        My Favorites ({favorites.length})
      </h2>
      {content}
    </div>
  );
};

export default Favorites;