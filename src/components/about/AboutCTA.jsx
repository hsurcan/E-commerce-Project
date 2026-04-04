import ctaGirl from "../../assets/about/cta-girl.jpg"; 

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        

        <div className="w-full md:w-[60%] bg-primary-blue text-white py-16 lg:py-24 px-10 md:px-16 flex flex-col items-center md:items-start text-center md:text-left space-y-6 lg:space-y-8 rounded-none md:rounded-l-2xl">
          <h6 className="font-bold uppercase tracking-wider text-sm">
            WORK WITH US
          </h6>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-[400px]">
            Now Let’s grow Yours
          </h2>
          <p className="text-sm lg:text-base font-normal max-w-[320px] lg:max-w-[440px] opacity-90">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="pt-4 lg:pt-6">
            <button className="bg-transparent text-white px-10 py-4 border border-white rounded-md font-bold text-sm uppercase hover:bg-white hover:text-primary-blue transition-colors">
              Button
            </button>
          </div>
        </div>

        <div className="w-full md:w-[40%] relative flex justify-center md:justify-start items-center h-[300px] md:h-auto self-stretch">
          <img 
            src={ctaGirl} 
            alt="CTA Girl" 
            className="absolute md:relative z-10 w-[90%] md:w-full max-w-[350px] md:max-w-none object-contain h-full md:h-auto bottom-0 md:bottom-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;