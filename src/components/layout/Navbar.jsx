import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-6">
      <div className=" mx-auto px-6 flex items-center justify-between">
        
        <div className="flex md:items-center gap-12 lg:gap-20">

          <Link to="/" className="text-3xl font-bold text-dark-blue">Bandage</Link>

          <ul className="hidden lg:flex items-center gap-6 text-base font-bold text-second-text">
            <li><Link to="/" className="hover:text-primary-blue">Home</Link></li>
            <li><Link to="/shop" className="hover:text-primary-blue">Shop</Link></li>
            <li><Link to="/about" className="hover:text-primary-blue">About</Link></li>
            <li><Link to="/pricing" className="hover:text-primary-blue">Pricing</Link></li>
            <li><Link to="/team" className="hover:text-primary-blue">Team</Link></li>
            <li><Link to="/contact" className="hover:text-primary-blue">Contact</Link></li>
          </ul>
        </div>

  
        <div className="flex items-center gap-2 lg:gap-6">

          <div className="hidden lg:flex items-center gap-2 text-primary-blue font-bold text-sm cursor-pointer">
            <FiUser className="text-lg" />
            <span>Login / Register</span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-primary-blue text-xl">
            <FiSearch className="cursor-pointer" />
          </div>

          <div className="hidden lg:flex items-center gap-1 text-primary-blue cursor-pointer">
              <FiShoppingCart />
              <span className="text-xs font-normal">1</span>
          </div>

          <div className="hidden md:flex items-center gap-1 text-primary-blue cursor-pointer">
              <FiHeart />
              <span className="text-xs font-normal">1</span>
          </div>

          <button 
              className="lg:hidden text-dark-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white py-12 border-t border-gray-200 animate-fadeIn">
          <ul className="flex flex-col items-center gap-8 text-3xl text-second-text font-normal">
            <li><Link onClick={() => setIsMenuOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/shop">Shop</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/pricing">Pricing</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/team">Team</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/contact">Contact</Link></li>
            
            <li className="pt-4 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-primary-blue font-bold text-xl">
                <FiUser />
                <span>Login / Register</span>
              </div>

            <div className="flex items-center gap-6 text-primary-blue text-xl">
            <FiSearch className="cursor-pointer" />
            </div>
            
            <div className="flex items-center gap-1 text-primary-blue text-xl">
              <FiShoppingCart />
              <span className="text-xs font-normal">1</span>
            </div>

            <div className="flex items-center gap-1 text-primary-blue text-xl">
              <FiHeart />
              <span className="text-xs font-normal">1</span>
            </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;