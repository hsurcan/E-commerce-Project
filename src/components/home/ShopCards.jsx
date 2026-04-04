import shopcards1 from '../../assets/home/shopcards1.png';
import shopcards2 from '../../assets/home/shopcards2.png';
import shopcards3 from '../../assets/home/shopcards3.png';

const ShopCards = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[600px]">   

          <div className="relative group overflow-hidden cursor-pointer lg:col-span-1 lg:row-span-2 h-[450px] lg:h-full">
            <img 
              src={shopcards1} 
              alt="Main Product" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-10 left-10 bg-primary-blue bg-opacity-90 text-white p-6 max-w-[200px]">
              <h4 className="font-bold text-lg">Top Product Of The Week</h4>
              <button className="rounded-sm mt-4 border border-white px-6 py-2 uppercase text-xs font-bold hover:bg-white hover:text-primary-blue">
                Explore Items
              </button>
            </div>
          </div>

       
            <div className="relative group overflow-hidden cursor-pointer h-[350px] lg:h-[290px]">
              <img 
                src={shopcards2} 
                alt="Secondary Product" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-primary-blue bg-opacity-90 text-white p-5">
                <h4 className="font-bold text-lg">Top Product Of The Week</h4>
                <button className="mt-2 text-xs font-bold uppercase underline">Explore Items</button>
              </div>
            </div>


            <div className="relative group overflow-hidden cursor-pointer h-[350px] lg:h-[290px]">
              <img 
                src={shopcards3} 
                alt="Third Product" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-primary-blue bg-opacity-90 text-white p-5">
                <h4 className="font-bold text-lg">Top Product Of The Week</h4>
                <button className="mt-2 text-xs font-bold uppercase underline">Explore Items</button>
              </div>
            </div>

          </div>

        </div>
    </section>
  );
};

export default ShopCards;