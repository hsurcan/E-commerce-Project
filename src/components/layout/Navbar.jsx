import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white px-6 md:px-10 py-5">
      {/* Üst Kısım: Logo ve İkonlar/Menü */}
      <div className="flex justify-between items-center mb-6 md:mb-0">
        <div className="text-3xl font-bold text-dark-blue">Bandage</div>
        
        {/* Mobilde sağda burger menü ikonu */}
        <div className="md:hidden text-3xl text-dark-blue">
          <FiMenu />
        </div>
      </div>

      {/* Menü İçeriği - Mobilde dikey liste */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0">
        
        {/* Navigasyon Linkleri - Mobilde dikey, md'den sonra yatay */}
        <ul className="flex flex-col md:flex-row gap-6 md:gap-5 text-center md:text-left text-2xl md:text-base text-second-text font-bold">
          <li className="hover:text-dark-blue cursor-pointer text-primary-blue">Home</li>
          <li className="hover:text-dark-blue cursor-pointer">Shop</li>
          <li className="hover:text-dark-blue cursor-pointer">About</li>
          <li className="hover:text-dark-blue cursor-pointer">Blog</li>
          <li className="hover:text-dark-blue cursor-pointer">Contact</li>
          <li className="hover:text-dark-blue cursor-pointer">Pages</li>
        </ul>

        {/* Sağ Taraf - Mobilde dikey liste, text-4xl */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-primary-blue font-bold text-3xl md:text-base">
          <div className="flex items-center gap-2 cursor-pointer order-last md:order-first">
            <FiUser />
            <span className="md:block hidden">Login / Register</span>
          </div>
          
          <div className="flex items-center gap-6 md:gap-6 text-4xl md:text-xl">
            <FiSearch className="cursor-pointer" />
            <div className="flex items-center gap-1 cursor-pointer">
              <FiShoppingCart />
              <span className="font-normal text-sm">1</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FiHeart />
              <span className="font-normal text-sm">1</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;