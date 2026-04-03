import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
     
      <div className="bg-[#FAFAFA] py-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h3 className="text-2xl font-bold text-dark-blue">Bandage</h3>
          <div className="flex gap-5 text-primary-blue text-2xl">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </div>
      </div>

      <hr className="border-[#E6E6E6] mx-40" />

      {/*Linkler*/}
      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">

          {/* Company Info */}
          <div className="space-y-4">
            <h5 className="font-bold text-dark-blue">Company Info</h5>
            <ul className="text-second-text font-bold text-sm space-y-3">
              <li className="hover:text-primary-blue cursor-pointer">About Us</li>
              <li className="hover:text-primary-blue cursor-pointer">Carrier</li>
              <li className="hover:text-primary-blue cursor-pointer">We are hiring</li>
              <li className="hover:text-primary-blue cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h5 className="font-bold text-dark-blue">Legal</h5>
            <ul className="text-second-text font-bold text-sm space-y-3">
              <li className="hover:text-primary-blue cursor-pointer">About Us</li>
              <li className="hover:text-primary-blue cursor-pointer">Carrier</li>
              <li className="hover:text-primary-blue cursor-pointer">We are hiring</li>
              <li className="hover:text-primary-blue cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h5 className="font-bold text-dark-blue">Features</h5>
            <ul className="text-second-text font-bold text-sm space-y-3">
              <li className="hover:text-primary-blue cursor-pointer">Business Marketing</li>
              <li className="hover:text-primary-blue cursor-pointer">User Analytic</li>
              <li className="hover:text-primary-blue cursor-pointer">Live Chat</li>
              <li className="hover:text-primary-blue cursor-pointer">Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h5 className="font-bold text-dark-blue">Resources</h5>
            <ul className="text-second-text font-bold text-sm space-y-3">
              <li className="hover:text-primary-blue cursor-pointer">IOS & Android</li>
              <li className="hover:text-primary-blue cursor-pointer">Watch a Demo</li>
              <li className="hover:text-primary-blue cursor-pointer">Customers</li>
              <li className="hover:text-primary-blue cursor-pointer">API</li>
            </ul>
          </div>

          {/* Get In Touch*/}
          <div className="space-y-4 lg:col-span-1">
            <h5 className="font-bold text-dark-blue">Get In Touch</h5>
            <div className="flex flex-col gap-2">
              <div className="flex h-12">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-md px-4 w-full outline-none focus:border-primary-blue"
                />
                <button className="bg-primary-blue text-white px-4 rounded-r-md font-medium text-sm hover:bg-opacity-90 transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-second-text text-xs">Lore impum dolor amit</p>
            </div>
          </div>

        </div>
      </div>

      {/*Copyright*/}
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 text-center md:text-left">
          <p className="text-second-text font-bold text-sm">
            Made With Love By Finland All Right Reserved 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;