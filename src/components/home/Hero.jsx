import heroModel from "../../assets/home/heroModel.png";

const Hero = () => {
  return (
    <section className="bg-white px-0 md:px-10 lg:px-20 py-4">
    
      <div className="relative  bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-[20px] min-h-[600px] flex items-center">
        
        <div className="container mx-auto px-15 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="w-full md:w-1/2 text-center md:text-left z-10 space-y-8 py-20">
            <h5 className="font-bold text-primary-blue tracking-widest uppercase text-base">
              Summer 2020
            </h5>
            <h1 className="text-5xl md:text-7xl font-bold text-dark-blue leading-tight uppercase whitespace-nowrap">
              New Collection
            </h1>
            <p className="text-second-text text-xl md:max-w-[400px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="pt-4">
              <button className="bg-primary-blue text-white px-12 py-5 rounded-md font-bold text-2xl uppercase shadow-sm hover:bg-[#1a92d6] transition-all">
                Shop Now
              </button>
            </div>
          </div>
  
          <div className="w-full md: relative flex items-end self-end left-52 ">

             {/* Arkadaki büyük beyaz daire */}
            <div className="absolute top-48 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full opacity-100 hidden md:block"></div>
            <div className="absolute -top-1 left-20 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-white rounded-full opacity-100 hidden md:block"></div>
            
            <img 
              src={heroModel} 
              alt="Summer Girl" 
              className="relative z-10 w-[110%] md:w-[110%] max-w-none object-contain md:bottom-[-36px] md:right-12"
            />
            
            <div className="absolute top-20 right-0 w-6 h-6 bg-[#977DF4] rounded-full hidden md:block"></div>
            <div className="absolute bottom-40 left-0 w-4 h-4 bg-[#977DF4] rounded-full hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;