import content1 from '../../assets/home/content1.jpg';
import content2 from '../../assets/home/content2.jpg';

const Content = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Görsel Alanı */}
          <div className="flex gap-4 w-full lg:w-1/2">
            <div className="w-1/2">
              <img 
                src={content1} 
                alt="Content Visual 1" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 mt-8"> 
              <img 
                src={content2} 
                alt="Content Visual 2" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Metin Alanı */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-6">
            <h5 className="text-primary-blue font-bold tracking-widest uppercase">
              Featured Products
            </h5>
            <h2 className="text-dark-blue text-4xl font-bold leading-tight">
              We love what we do
            </h2>
            <div className="text-second-text space-y-4 text-sm md:text-base">
              <p>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
              <p>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Content;