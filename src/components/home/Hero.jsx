import heroModel from "../../assets/home/heroModel.png";

const Hero = () => {
  return (
    <section className=" bg-white px-5 md:px-10 lg:px-20 py-4">
    
      <div className="relative bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-[20px] min-h-[600px] flex items-center">        
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="w-full md:w-1/2 text-center md:text-left z-10 space-y-6 pb-2 pt-16">
            <h5 className="font-bold text-primary-blue tracking-widest uppercase text-base">
              Summer 2020
            </h5>
            <h1 className="text-4xl md:text-7xl font-bold text-dark-blue leading-tight uppercase whitespace-normal md:whitespace-nowrap">
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
         
          <div className="w-full md:w-2/5 relative flex justify-center md:justify-end items-end self-end mt-auto md:mt-0 h-[400px] md:h-auto overflow-visible ">

          <div className="absolute top-[20%] md: left-40 -translate-x-1/2 w-[250px] h-[250px] md:w-[100px] md:h-[100px] bg-white rounded-full z-0 shadow-lg"></div>
            
            <img 
              src={heroModel} 
              alt="Summer Girl" 
              className="relative z-10 w-[120%] md:w-[140%] max-w-none object-contain bottom-[0px] md:bottom-[0px] md:-right-36 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;