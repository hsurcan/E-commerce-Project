import { useState } from "react";
import { FiHeart, FiShoppingCart, FiEye, FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const ProductDetail = ({ product }) => {
  // Local state to manage which image is showing in the big display
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <section className="container mx-auto px-6 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left: Product Slider */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden bg-gray-200 rounded-md">
            <img 
              src={product.images[activeImageIndex]?.url} 
              alt={product.name} 
              className="w-full h-full object-cover transition-opacity duration-300" 
            />
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl drop-shadow-md hover:scale-110 transition-transform"
                >
                  <FiChevronLeft />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl drop-shadow-md hover:scale-110 transition-transform"
                >
                  <FiChevronRight />
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-4 h-24 overflow-x-auto">
            {product.images.map((img, index) => (
              <img 
                key={index}
                src={img.url} 
                onClick={() => setActiveImageIndex(index)}
                className={`w-24 h-24 object-cover cursor-pointer transition-all ${
                  activeImageIndex === index ? "border-2 border-primary-blue opacity-100" : "opacity-60 hover:opacity-100"
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 pt-4">
          <h2 className="text-xl text-dark-blue font-medium">{product.name}</h2>
          
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={i < Math.floor(product.rating) ? "fill-current" : ""} 
                />
              ))}
            </div>
            <span className="text-second-text text-sm font-bold">{product.sell_count} Reviews</span>
          </div>

          <h3 className="text-2xl font-bold text-dark-blue">${product.price}</h3>
          
          <div className="flex gap-2 text-sm font-bold">
            <span className="text-second-text">Availability :</span>
            <span className="text-primary-blue">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <p className="text-second-text text-sm border-b border-gray-200 pb-6">
            {product.description}
          </p>
          
          {/* Static color options as per original design */}
          <div className="flex gap-2 py-2">
            <div className="w-8 h-8 rounded-full bg-primary-blue cursor-pointer hover:ring-2 ring-offset-2 ring-primary-blue transition-all"></div>
            <div className="w-8 h-8 rounded-full bg-[#23856D] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23856D] transition-all"></div>
            <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer hover:ring-2 ring-offset-2 ring-[#E77C40] transition-all"></div>
            <div className="w-8 h-8 rounded-full bg-dark-blue cursor-pointer hover:ring-2 ring-offset-2 ring-dark-blue transition-all"></div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button className="bg-primary-blue text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-dark-blue hover:shadow-lg transition-all active:scale-95">
              Add to Cart
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:text-red-500 transition-colors"><FiHeart /></button>
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:text-primary-blue transition-colors"><FiShoppingCart /></button>
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:text-dark-blue transition-colors"><FiEye /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;