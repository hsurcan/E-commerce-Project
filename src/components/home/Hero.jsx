import heroModel from '../../assets/home/heroModel.png'; 

const Hero = () => {
  return (
    <section className="bg-white px-0 md:px-10 lg:px-20 py-4">
    
    <div className="relative bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-[40px] min-h-[600px] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between py-16 md:py-0">
        
        <div className="relative md:w-1/2 flex justify-center md:justify-end md:order-last mb-12 md:mb-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-white opacity-20 rounded-full"></div>
          
          <img 
            src={heroModel} 
            alt="New Collection Model" 
            className="relative z-10 max-h-[350px] md:max-h-[600px] object-fill"
          />
        </div>

        <div className="flex flex-col gap-6 text-white z-10 text-center md:text-left items-center md:items-start md:w-1/2">
          <h5 className="font-bold tracking-widest text-base text-primary-blue">SUMMER 2020</h5>
          <h1 className="text-4xl text-dark-blue md:text-7xl font-bold leading-tight uppercase">
            NEW COLLECTION
          </h1>
          <p className="text-lg text-second-text md:text-xl max-w-[440px] font-medium opacity-90 mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-primary-blue hover:bg-hover-color text-white px-12 py-4 rounded-md font-bold text-xl transition-transform hover:scale-105 active:scale-95 uppercase w-fit">
            SHOP NOW
          </button>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Hero;