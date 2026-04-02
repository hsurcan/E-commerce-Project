import { FiSearch, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white">
      <div className="text-2xl font-bold text-dark-blue">Bandage</div>

      <ul className="hidden md:flex gap-5 text-second-text font-bold">
        <li className="hover:text-dark-blue cursor-pointer text-primary-blue">Home</li>
        <li className="hover:text-dark-blue cursor-pointer">Shop</li>
        <li className="hover:text-dark-blue cursor-pointer">About</li>
        <li className="hover:text-dark-blue cursor-pointer">Blog</li>
        <li className="hover:text-dark-blue cursor-pointer">Contact</li>
        <li className="hover:text-dark-blue cursor-pointer">Pages</li>
      </ul>

      <div className="flex items-center gap-8 text-primary-blue font-bold">
        <div className="flex items-center gap-2 cursor-pointer">
          <FiUser />
          <span>Login / Register</span>
        </div>
        
        <div className="flex items-center gap-6 text-xl">
          <FiSearch className="cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">
            <FiShoppingCart />
            <span className="font-normal text-xs">1</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FiHeart />
            <span className="font-normal text-xs">1</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;