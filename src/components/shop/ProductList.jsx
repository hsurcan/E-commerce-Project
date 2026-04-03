import {productlist} from "../../api/mockdata/productlist";

const ProductList = () => {
  return (
    <section className="bg-[#FAFAFA] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productlist.slice(0, 12).map((product) => (
            <div key={product.id} className="bg-white p-0 flex flex-col group cursor-pointer shadow-sm">
               <img src={product.image} className="w-full h-80 object-cover" />
               <div className="p-6 space-y-2">
                 <h5 className="font-bold text-dark-blue">{product.name}</h5>
                 <p className="text-second-text text-sm font-bold">{product.dept}</p>
                 <div className="flex gap-2 font-bold">
                    <span className="text-[#bdbdbd]">{product.oldPrice}</span>
                    <span className="text-[#23856D]">{product.newPrice}</span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;