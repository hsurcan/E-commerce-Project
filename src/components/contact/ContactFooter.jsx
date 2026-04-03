import { FiArrowDownRight } from "react-icons/fi";

const ContactFooter = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">
        
        {/* Görseldeki Mavi Ok İkonu */}
        <div className="relative mb-4">
          <FiArrowDownRight className="text-primary-blue text-7xl transform rotate-45 md:rotate-0" />
          {/* İstersen buraya görseldeki gibi tam kıvrımlı bir SVG ok da koyabilirsin */}
        </div>

        <h6 className="font-bold text-dark-blue tracking-widest uppercase text-sm md:text-base">
          We Can't Wait to Meet You
        </h6>
        
        <h2 className="text-5xl md:text-6xl font-bold text-dark-blue tracking-tight">
          Let’s Talk
        </h2>

        <div className="pt-4">
          <button className="bg-primary-blue text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1a92d6] transition-all shadow-lg active:scale-95">
            Try it free now
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactFooter;