import { FiHeart, FiShoppingCart, FiEye, FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import productImg from "../../assets/product/main-product.png";

const ProductDetail = () => {
  return (
    <section className="container mx-auto px-6 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Sol: Ürün Slider */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden bg-gray-200">
            <img src={productImg} alt="Product" className="w-full h-full object-cover" />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"><FiChevronLeft /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"><FiChevronRight /></button>
          </div>
          <div className="flex gap-4 h-24">
            <img src={productImg} className="w-24 object-cover opacity-50 border border-primary-blue" />
            <img src={productImg} className="w-24 object-cover" />
          </div>
        </div>

        {/* Sağ: Ürün Bilgileri */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 pt-4">
          <h2 className="text-xl text-dark-blue font-medium">Floating Phone</h2>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 gap-1">
              <FiStar className="fill-current"/> <FiStar className="fill-current"/> <FiStar className="fill-current"/> <FiStar className="fill-current"/> <FiStar />
            </div>
            <span className="text-second-text text-sm font-bold">10 Reviews</span>
          </div>
          <h3 className="text-2xl font-bold text-dark-blue">$1,139.33</h3>
          <div className="flex gap-2 text-sm font-bold">
            <span className="text-second-text">Availability :</span>
            <span className="text-primary-blue">In Stock</span>
          </div>
          <p className="text-second-text text-sm border-b border-gray-200 pb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
          </p>
          
          <div className="flex gap-2 py-4">
            <div className="w-8 h-8 rounded-full bg-primary-blue"></div>
            <div className="w-8 h-8 rounded-full bg-[#23856D]"></div>
            <div className="w-8 h-8 rounded-full bg-[#E77C40]"></div>
            <div className="w-8 h-8 rounded-full bg-dark-blue"></div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button className="bg-primary-blue text-white px-6 py-3 rounded-md font-bold text-sm hover:scale-105 transition-transform">
              Select Options
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white"><FiHeart /></button>
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white"><FiShoppingCart /></button>
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white"><FiEye /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;