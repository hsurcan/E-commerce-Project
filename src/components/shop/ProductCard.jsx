import {productlist} from "../../api/mockdata/productlist";
import { slugify } from '../../utils/slugify';

const ProductCard = ({ product }) => {

  const detailUrl = `/shop/${product.gender === 'k' ? 'kadin' : 'erkek'}/${slugify(product.categoryName || 'cat')}/${product.category_id}/${slugify(product.name)}/${product.id}`;
  
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-6 lg:px-28">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productlist.slice(0, 12).map((product) => (
            <div key={product.id} className="bg-white p-0 flex flex-col group cursor-pointer shadow-sm">
               <img src={product.image} className="w-full h-90 object-cover" />
              
               <div className="flex justify-center p-4">
                 <h5 className="font-bold text-dark-blue">{product.name}</h5>
                </div>

                <div className="flex justify-center pb-4  ">
                  <p className="text-second-text text-sm font-bold">{product.dept}</p>
                </div>

                 <div className="flex justify-center gap-4 font-bold pb-4">
                    <span className="text-[#bdbdbd]">{product.oldPrice}</span>
                    <span className="text-[#23856D]">{product.newPrice}</span>
                 </div>

                 <div className="flex gap-2 justify-center pt-2">
                  <div className="w-4 h-4 rounded-full bg-primary-blue"></div>
                  <div className="w-4 h-4 rounded-full bg-success-green"></div>
                  <div className="w-4 h-4 rounded-full bg-alert-orange"></div>
                  <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                </div>
               </div>
          ))}
        </div>
      </div>
      <Link to={detailUrl} className="group cursor-pointer">
      <div className="border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-lg overflow-hidden bg-white">
        <img src={product.images[0].url} alt={product.name} className="w-full h-80 object-cover" />
        <div className="p-4 text-center">
          <h5 className="font-bold text-dark-blue group-hover:text-primary-blue">{product.name}</h5>
          <p className="text-secondary-1 font-bold">${product.price}</p>
        </div>
      </div>
    </Link>
    </section>
  );
};

export default ProductCard;