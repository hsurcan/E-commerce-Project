import { GiBadGnome } from "react-icons/gi";
import { products } from "../../api/mockdata/products";
import { TbBrandUbuntu } from "react-icons/tb";

function ProductCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-40 text-center">

        {/* Başlık */}
        <div className="mb-12 space-y-3">
          <h4 className="text-second-text text-xl font-medium">Featured Products</h4>
          <h3 className="text-dark-blue text-2xl font-bold tracking-wide uppercase">BESTSELLER PRODUCTS</h3>
          <p className="text-second-text text-sm">Problems trying to resolve the conflict between</p>
        </div>

        {/* Ürün Listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="space-y-2 pb-6">
                <h5 className="text-dark-blue font-bold">{product.name}</h5>
                <p className="text-second-text text-sm font-bold">{product.dept}</p>
                <div className="flex gap-2 justify-center font-bold">
                  <span className="text-[#bdbdbd]">{product.oldPrice}</span>
                  <span className="text-success-green">{product.newPrice}</span>
                </div>

                <div className="flex gap-2 justify-center pt-2">
                  <div className="w-4 h-4 rounded-full bg-primary-blue"></div>
                  <div className="w-4 h-4 rounded-full bg-success-green"></div>
                  <div className="w-4 h-4 rounded-full bg-alert-orange"></div>
                  <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="border-2 border-primary-blue text-primary-blue px-10 py-4 rounded-md font-bold hover:bg-primary-blue hover:text-white transition-all uppercase">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCards;

