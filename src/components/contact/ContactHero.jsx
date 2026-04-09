import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import heroImg from "../../assets/contact/heroImg.png"; 

const ContactHero = () => {
  return (
    <section className="mx-auto px-8 py-8 md:py-2 lg:px-32">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Metin İçeriği */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
          <h6 className="font-bold text-dark-blue uppercase tracking-wider">Contact Us</h6>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-blue leading-tight">
            Get in touch today!
          </h1>
          <p className="text-second-text text-xl max-w-[380px]">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="space-y-2 font-bold text-dark-blue text-2xl">
            <p>Phone : +451 215 215 </p>
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
        <div className="w-full flex justify-center overflow-hidden">
          <img src={heroImg} alt="Family Shopping" 
          className="w-[200%] max-w-none -translate-x-32 md:w-[120%] lg:w-auto lg:-translate-x-40" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;