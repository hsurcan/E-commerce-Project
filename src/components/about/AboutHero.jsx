import heroGirl from "../../assets/about/hero-girl.png"; 

const AboutHero = () => {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
  
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 z-10">
          <h6 className="hidden lg:block font-bold text-dark-blue uppercase tracking-wider text-sm">
            ABOUT COMPANY
          </h6>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-blue leading-tight uppercase max-w-[400px]">
            ABOUT US
          </h1>
          <p className="text-second-text text-xl max-w-[350px] lg:max-w-[440px]">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="pt-4">
            <button className="bg-primary-blue text-white px-10 py-4 rounded-md font-bold text-sm uppercase hover:bg-opacity-90 transition-all">
              Get Quote Now
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center">
          {/* Arkadaki pembe daire dekoru */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#FFE9EA] rounded-full -z-10"></div>
          
          <img 
            src={heroGirl} 
            alt="About Us Girl" 
            className="relative z-10 w-[90%] md:w-full max-w-[380px] md:max-w-[550px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;