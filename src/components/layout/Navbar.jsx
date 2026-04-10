import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import useCategoryStore from '../../store/useCategoryStore';
import { FiUser, FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import useUserStore from "../../store/useUserStore";


const Navbar = () => {
  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Filter categories by gender
  const womenCategories = categories.filter(cat => cat.gender === 'k');
  const menCategories = categories.filter(cat => cat.gender === 'e');
  const childCategories = categories.filter(cat => cat.gender === 'c');
  const beautyCategories = categories.filter(cat => cat.gender === 'b');
  const sportsCategories = categories.filter(cat => cat.gender === 's');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useUserStore((store) => store.isLoggedIn);

  return (
<nav className="bg-white py-6">
  <div className="mx-auto px-6 flex items-center justify-between">
    <div className="flex md:items-center gap-12 lg:gap-20">
      <Link to="/" className="text-3xl font-bold text-dark-blue">Bandage</Link>

      <ul className="hidden lg:flex items-center gap-6 text-base font-bold text-second-text">
        <li><Link to="/" className="hover:text-primary-blue transition-colors">Home</Link></li>
        
        {/* SHOP DROPDOWN */}
        <li className="group relative inline-block py-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <Link 
              to="/shop" 
              className="hover:text-primary-blue transition-colors"
            >
              Shop
            </Link>
            <i className="fa-solid fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
          </div>
          
          {/* Dropdown Menu - Positioned below the link */}
          <div className="absolute left-0 top-full z-50 hidden min-w-[400px] grid-cols-2 bg-white p-6 shadow-xl border-t-2 border-primary-blue group-hover:grid">
            <div>
              <h3 className="mb-4 font-bold text-dark-blue border-b pb-2">Women</h3>
              <div className="flex flex-col gap-2">
                {womenCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/kadin/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-sm font-normal text-second-text hover:text-primary-blue hover:translate-x-1 transition-transform"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-dark-blue border-b pb-2">Men</h3>
              <div className="flex flex-col gap-2">
                {menCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/erkek/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-sm font-normal text-second-text hover:text-primary-blue hover:translate-x-1 transition-transform"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-dark-blue border-b pb-2">Child</h3>
              <div className="flex flex-col gap-2">
                {childCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/erkek/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-sm font-normal text-second-text hover:text-primary-blue hover:translate-x-1 transition-transform"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-bold text-dark-blue border-b pb-2">Beauty</h3>
              <div className="flex flex-col gap-2">
                {beautyCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/erkek/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-sm font-normal text-second-text hover:text-primary-blue hover:translate-x-1 transition-transform"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

           <div>
              <h3 className="mb-4 font-bold text-dark-blue border-b pb-2">Sports</h3>
              <div className="flex flex-col gap-2">
                {sportsCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/erkek/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-sm font-normal text-second-text hover:text-primary-blue hover:translate-x-1 transition-transform"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </li>
        <li><Link to="/about" className="hover:text-primary-blue transition-colors">About</Link></li>
        <li><Link to="/pricing" className="hover:text-primary-blue transition-colors">Pricing</Link></li>
        <li><Link to="/team" className="hover:text-primary-blue transition-colors">Team</Link></li>
        <li><Link to="/contact" className="hover:text-primary-blue transition-colors">Contact</Link></li>
      </ul>
    </div>



    {/* Right Side Icons */}
    <div className="flex items-center gap-2 lg:gap-6">
      <div className="hidden lg:flex items-center gap-2 text-primary-blue font-bold text-sm cursor-pointer">
        <FiUser className="text-lg" />
        <Link to={isLoggedIn ? "/account" : "/login"} className="hover:opacity-80"> 
          {isLoggedIn ? "My Account" : "Login / Register"}
        </Link>
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

  {/* MOBILE MENU */}
  {isMenuOpen && (
    <div className="lg:hidden bg-white py-12 border-t border-gray-200 animate-fadeIn">
      <ul className="flex flex-col items-center gap-8 text-3xl text-second-text font-normal">
        <li><Link onClick={() => setIsMenuOpen(false)} to="/">Home</Link></li>
        <li><Link onClick={() => setIsMenuOpen(false)} to="/shop">Shop</Link></li>
        <li><Link onClick={() => setIsMenuOpen(false)} to="/about">About</Link></li>
        <li><Link onClick={() => setIsMenuOpen(false)} to="/pricing">Pricing</Link></li>
        <li><Link onClick={() => setIsMenuOpen(false)} to="/contact">Contact</Link></li>
        
        <li className="pt-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-primary-blue font-bold text-xl">
            <FiUser />
            <Link onClick={() => setIsMenuOpen(false)} to={isLoggedIn ? "/account" : "/login"}> 
              {isLoggedIn ? "My Account" : "Login / Register"}
            </Link>
          </div>
          {/* ... other mobile icons ... */}
        </li>
      </ul>
    </div>
  )}
</nav>
  );
};

export default Navbar;