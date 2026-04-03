import { bestseller } from "../../api/mockdata/bestseller";

const BestSeller = () => {
  return (
    <section className="bg-[#FAFAFA] py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-dark-blue border-b border-gray-200 pb-6 mb-8 uppercase">
          BESTSELLER PRODUCTS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bestseller.slice(0, 8).map((product) => (
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

export default BestSeller;