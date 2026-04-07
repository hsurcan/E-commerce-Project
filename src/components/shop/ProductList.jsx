import {productlist} from "../../api/mockdata/productlist";

const ProductList = () => {
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
    </section>
  );
};

export default ProductList;