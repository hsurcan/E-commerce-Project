import heroGirl from "../../assets/about/hero-girl.png";

const AboutHero = () => {
  return (
    <section className="relative w-full overflow-x-hidden bg-white py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center max-w-[1440px] mx-auto px-6 lg:px-28 gap-12 lg:gap-0">
        
        {/* SOL METİN ALANI */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          <h6 className="hidden lg:block font-bold text-dark-blue uppercase tracking-wider text-sm">
            ABOUT COMPANY
          </h6>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-blue leading-tight uppercase">
            ABOUT US
          </h1>
          <p className="text-second-text text-lg md:text-xl max-w-[350px] lg:max-w-[440px]">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="pt-4">
            <button className="bg-primary-blue text-white px-10 py-4 rounded-md font-bold text-sm uppercase hover:shadow-lg transition-all">
              Get Quote Now
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
   
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] 
                        bg-[#FFE9EA] rounded-full z-0">
          </div>
          
          <img 
            src={heroGirl} 
            alt="About Us Girl" 
            className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none 
                       h-auto object-contain mx-auto lg:mr-0 lg:ml-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;