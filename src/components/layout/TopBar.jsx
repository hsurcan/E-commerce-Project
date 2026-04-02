import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-dark-blue text-white py-3 px-6 hidden lg:flex justify-between items-center text-sm font-bold">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <FiPhone />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMail />
          <span>michelle.rivera@example.com</span>
        </div>
      </div>

      <div>Follow Us and get a chance to win 80% off</div>

      <div className="flex items-center gap-4">
        <span>Follow Us:</span>
        <div className="flex gap-3 text-lg">
          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;