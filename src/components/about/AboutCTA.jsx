import ctaGirl from "../../assets/about/cta-girl.jpg"; 

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="mx-0px flex flex-col md:flex-row items-center">
        

        <div className="w-full md:w-[70%] bg-primary-blue text-white py-16 lg:py-36 px-10 md:px-48 flex flex-col items-center md:items-start text-center md:text-left space-y-6 lg:space-y-8 rounded-none">
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

        <div className="hidden md:block md:w-[40%] max-w-full relative self-stretch overflow-hidden">
          <img 
            src={ctaGirl} 
            alt="CTA Girl" 
            className="absolute bottom-0 left-0 w-full h-full object-fill object-bottom"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;