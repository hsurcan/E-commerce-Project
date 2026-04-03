import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import heroImg from "../../assets/contact/heroImg.png"; 
const ContactHero = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Metin İçeriği */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          <h6 className="font-bold text-dark-blue uppercase tracking-wider">Contact Us</h6>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-blue leading-tight">
            Get in touch today!
          </h1>
          <p className="text-second-text text-xl max-w-[380px]">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="space-y-2 font-bold text-dark-blue text-2xl">
            <p>Phone ; +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
          <div className="flex gap-8 text-3xl text-dark-blue pt-4">
            <FiTwitter className="cursor-pointer hover:text-primary-blue transition-colors" />
            <FiFacebook className="cursor-pointer hover:text-primary-blue transition-colors" />
            <FiInstagram className="cursor-pointer hover:text-primary-blue transition-colors" />
            <FiLinkedin className="cursor-pointer hover:text-primary-blue transition-colors" />
          </div>
        </div>

        {/* Görsel */}
        <div className="w-full md:w-1/2 relative">
          {/* Arka plandaki pembe daire dekoru (Opsiyonel) */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFE9EA] rounded-full -z-10 blur-3xl opacity-50"></div>
          <img src={heroImg} alt="Family Shopping" className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;