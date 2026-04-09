import { FiPlay } from "react-icons/fi";
import videoBg from "../../assets/about/video-bg.png";

const AboutVideo = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative rounded-2xl md:rounded-[40px] overflow-hidden group cursor-pointer aspect-video shadow-2xl">
          
          <img 
            src={videoBg} 
            alt="Video Background" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Karartma */}
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary-blue text-white p-6 md:p-8 rounded-full shadow-2xl scale-100 group-hover:scale-110 transition-transform">
            <FiPlay className="text-4xl md:text-5xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVideo;