import { useState } from "react";
import { FiHeart, FiShoppingCart, FiChevronLeft, FiChevronRight, FiStar, FiTruck, FiShield, FiRotateCcw } from "react-icons/fi";
import useCartStore from '../../store/useCartStore';
import useFavoriteStore from "../../store/useFavoriteStore";

const ProductDetail = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { toggleFavorite, favorites } = useFavoriteStore();

  if (!product) return null;

  const images = product.images || [];
  const currentImage = images[activeImageIndex]?.url || product.thumbnail;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const isFavorite = favorites.some(fav => fav.id === product.id);

  return (
    <section className="container mx-auto px-6 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Product Slider */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden bg-white rounded-md border">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-contain transition-opacity duration-300"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 h-20 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={`${product.name} thumbnail ${index}`}
                onClick={() => setActiveImageIndex(index)}
                className={`w-20 h-20 object-cover rounded border cursor-pointer transition-all ${
                  activeImageIndex === index
                    ? "border-primary-blue ring-1 ring-primary-blue"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl text-dark-blue font-bold">
              {product.name}
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < Math.floor(product.rating || 0) ? "fill-current" : ""}
                    size={18}
                  />
                ))}
              </div>
              <span className="text-second-text text-sm font-bold">
                ({product.sell_count || 0} Reviews)
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-dark-blue">
              ${product.price?.toFixed(2)}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-second-text text-sm font-bold">Availability :</span>
              <span className={product.stock > 0 ? "text-primary-blue font-bold text-sm" : "text-red-500 font-bold text-sm"}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          <p className="text-second-text text-sm leading-relaxed border-b pb-6">
            {product.description}
          </p>

          <div className="flex gap-2 py-4">
            <div className="w-8 h-8 rounded-full bg-primary-blue cursor-pointer border-2 border-white ring-1 ring-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-success-green cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-alert-orange cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-dark-blue cursor-pointer"></div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className={`px-8 py-3 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                product.stock === 0
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-primary-blue text-white hover:bg-dark-blue active:scale-95"
              }`}
            >
              Add to Cart
            </button>
            
            <button
              onClick={() => toggleFavorite(product)}
              className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
            >
              <FiHeart 
                className={`size-5 ${isFavorite ? "text-red-500 fill-current" : "text-dark-blue"}`} 
              />
            </button>
          </div>

          {/* Ek Bilgiler */}
          <div className="flex flex-col gap-4 mt-8 pt-8 border-t text-sm">
            <div className="flex items-center gap-3">
              <FiTruck className="text-primary-blue size-5" />
              <span className="text-second-text font-bold">Free delivery on orders over $50</span>
            </div>
            <div className="flex items-center gap-3">
              <FiShield className="text-primary-blue size-5" />
              <span className="text-second-text font-bold">1 Year Brand Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;