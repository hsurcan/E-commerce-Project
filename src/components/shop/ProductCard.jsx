import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slugify';
import useCategoryStore from '../../store/useCategoryStore';

const ProductCard = ({ product }) => {
  const { categories } = useCategoryStore();

  if (!product) return null;

  const currentCategory = categories.find(cat => cat.id === product.category_id);

  const gender = currentCategory?.gender === 'k' ? 'kadin' : 'erkek';

  const categoryName = currentCategory 
    ? slugify(currentCategory.title) 
    : 'urunler';

  const detailUrl = `/shop/${gender}/${categoryName}/${product.category_id}/${slugify(product.name || product.title)}/${product.id}`;

  const productImage = product.images?.[0]?.url || product.images?.[0] || product.thumbnail;

  return (
    <Link to={detailUrl} className="group cursor-pointer block h-full">
      <div className="flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full border rounded-lg overflow-hidden">
        
        {/* Resim Alanı */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img 
            src={productImage} 
            alt={product.name || product.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        </div>

        {/* Bilgi Alanı */}
        <div className="p-4 flex flex-col gap-2 text-center flex-grow">
          <h5 className="font-bold text-dark-blue group-hover:text-primary-blue truncate">
            {product.name || product.title}
          </h5>
          
          <p className="text-second-text text-sm font-bold uppercase tracking-tighter">
            {currentCategory?.title || "Product"}
          </p>

          <div className="flex justify-center gap-3 font-bold py-2">

            {product.oldPrice ? (
              <span className="text-[#bdbdbd] line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            ) : null}
            <span className="text-[#23856D]">${product.price.toFixed(2)}</span>
          </div>

          <div className="flex gap-1.5 justify-center mt-auto pb-2">
            <div className="w-3.5 h-3.5 rounded-full bg-primary-blue"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-success-green"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-alert-orange"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-dark-blue"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;