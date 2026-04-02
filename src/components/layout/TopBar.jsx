import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
    // Mobilde block (alt alta), md'den sonra flex (yan yana)
    <div className="bg-dark-blue text-white py-6 md:py-3 px-6 flex flex-col md:flex-row justify-between items-center text-sm font-bold gap-4 md:gap-0">
      
      {/* İletişim Bilgileri - Mobilde alt alta */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <FiPhone className="text-lg md:text-base"/>
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMail className="text-lg md:text-base"/>
          <span>michelle.rivera@example.com</span>
        </div>
      </div>

      {/* Kampanya Mesajı - Mobilde ortalanmış */}
      <div className="text-center md:text-left">
        Follow Us and get a chance to win 80% off
      </div>

      {/* Sosyal Medya - Mobilde ortalanmış */}
      <div className="flex items-center gap-4">
        <span>Follow Us:</span>
        <div className="flex gap-3 text-lg md:text-base">
          <FaInstagram className="cursor-pointer hover:text-primary-blue" />
          <FaYoutube className="cursor-pointer hover:text-primary-blue" />
          <FaFacebook className="cursor-pointer hover:text-primary-blue" />
          <FaTwitter className="cursor-pointer hover:text-primary-blue" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;