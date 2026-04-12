import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX, FiTrash2 } from "react-icons/fi";
import useCategoryStore from '../../store/useCategoryStore';
import useUserStore from "../../store/useUserStore";
import useCartStore from '../../store/useCartStore';
import useFavoriteStore from "../../store/useFavoriteStore";
import useProductStore from "../../store/useProductStore";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { categories, fetchCategories } = useCategoryStore();
  const { favorites } = useFavoriteStore();
  const { setFilterText } = useProductStore();
  const { cart, removeFromCart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useUserStore((store) => store.isLoggedIn);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const womenCategories = categories.filter(cat => cat.gender === 'k');
  const menCategories = categories.filter(cat => cat.gender === 'e');

  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setFilterText(localSearch); 
      navigate(`/shop?filter=${localSearch}`); 
      setIsSearchOpen(false); 
    }
  };

  const getCategoryLink = (cat) => {
    const genderPath = cat.gender === 'k' ? 'kadin' : 'erkek';
    const categoryName = cat.code.split(":")[1] || cat.title.toLowerCase();
    return `/shop/${genderPath}/${categoryName}/${cat.id}`;
  };

  return (
    <nav className="bg-white py-6 sticky top-0 z-[100] shadow-sm">
      <div className="mx-auto px-6 flex items-center justify-between">
        <div className="flex md:items-center gap-12 lg:gap-20">
          <Link to="/" className="text-3xl font-bold text-dark-blue">
            Bandage
          </Link>

          <ul className="hidden lg:flex items-center gap-6 text-base font-bold text-second-text">
            <li>
              <Link
                to="/"
                className="hover:text-primary-blue transition-colors"
              >
                Home
              </Link>
            </li>

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

              <div className="absolute left-0 top-full z-50 hidden min-w-[500px] grid-cols-3 bg-white p-6 shadow-xl border-t-2 border-primary-blue group-hover:grid">
                {/* Women Section */}
                <div>
                  <h3 className="mb-4 font-bold text-dark-blue border-b pb-2">
                    Women
                  </h3>
                  <div className="flex flex-col gap-2">
                    {womenCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={getCategoryLink(cat)}
                        className="text-sm font-normal text-second-text hover:text-primary-blue transition-all"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Men Section */}
                <div>
                  <h3 className="mb-4 font-bold text-dark-blue border-b pb-2">
                    Men
                  </h3>
                  <div className="flex flex-col gap-2">
                    {menCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={getCategoryLink(cat)}
                        className="text-sm font-normal text-second-text hover:text-primary-blue transition-all"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-bold text-dark-blue border-b pb-2 text-xs opacity-50">
                      More
                    </h3>
                    <p className="text-[10px] text-gray-400">
                      Discover all collections
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-primary-blue transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-primary-blue transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="hover:text-primary-blue transition-colors"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary-blue transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side Icons - Tasarım Korundu */}
        <div className="flex items-center gap-2 lg:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-primary-blue font-bold text-sm cursor-pointer">
            <FiUser className="text-lg" />
            <Link to={isLoggedIn ? "/account" : "/login"}>
              {isLoggedIn ? "My Account" : "Login / Register"}
            </Link>
          </div>

          <div className="relative flex items-center">
            {isSearchOpen && (
              <input
                type="text"
                className="absolute right-8 border border-primary-blue rounded-md px-2 py-1 text-sm animate-fadeIn"
                placeholder="Search..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                onKeyDown={handleSearch}
                autoFocus
              />
            )}
            <FiSearch
              className="text-primary-blue text-xl cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>

          {/* CART DROPDOWN - Tasarım Korundu */}
          <div className="group relative py-2">
            <Link
              to="/cart"
              className="hidden lg:flex items-center gap-1 text-primary-blue cursor-pointer"
            >
              <FiShoppingCart className="text-xl" />
              <span className="text-xs font-bold">{totalItems}</span>
            </Link>

            <div className="absolute right-0 top-full hidden w-80 bg-white shadow-2xl border border-gray-100 p-4 group-hover:block z-[110] rounded-md">
              <h3 className="font-bold text-dark-blue mb-4 border-b pb-2">
                My Cart ({totalItems})
              </h3>
              <div className="max-h-60 overflow-y-auto flex flex-col gap-4 mb-4 custom-scrollbar">
                {cart.length === 0 ? (
                  <p className="text-sm text-second-text py-4 text-center">
                    Your cart is empty.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-16 object-cover rounded bg-gray-50"
                      />
                      <div className="flex-grow min-w-0">
                        <p className="text-sm font-bold text-dark-blue truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-second-text">
                          {item.count} x{" "}
                          <span className="text-primary-blue">
                            ${item.price.toFixed(2)}
                          </span>
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-dark-blue mb-4">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to="/cart"
                      className="flex-1 text-center py-2 border border-primary-blue text-primary-blue text-xs font-bold rounded hover:bg-primary-blue hover:text-white transition-all"
                    >
                      Go to Cart
                    </Link>
                    <Link
                      to="/order/address"
                      className="flex-1 text-center py-2 bg-primary-blue text-white text-xs font-bold rounded hover:bg-dark-blue transition-all"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/favorites"
            className="hidden md:flex items-center gap-1 text-primary-blue cursor-pointer"
          >
            <FiHeart className="text-xl" />
            <span className="text-xs font-normal">{favorites.length}</span>
          </Link>

          <button
            className="lg:hidden text-dark-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Tasarım Korundu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-12 border-t border-gray-200 animate-fadeIn text-center">
          <ul className="flex flex-col gap-6 text-2xl text-second-text">
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/team">
                Team
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/contact">
                Contact
              </Link>
            </li>
            <li className="pt-4 border-t w-1/2 mx-auto">
              <Link
                className="text-primary-blue font-bold"
                onClick={() => setIsMenuOpen(false)}
                to={isLoggedIn ? "/account" : "/login"}
              >
                {isLoggedIn ? "My Account" : "Login / Register"}
              </Link>
            </li>
            <li className="pt-4 mx-auto">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/cart"
                className=" text-primary-blue cursor-pointer"
              >
                <FiShoppingCart className="text-xl" />
                <span className="text-xs font-bold">{totalItems}</span>
              </Link>
            </li>
            <li className="pt-4 mx-auto">
              <Link
              onClick={() => setIsMenuOpen(false)}
                to="/favorites"
                className="text-primary-blue cursor-pointer"
              >
                <FiHeart className="text-xl" />
                <span className="text-xs font-normal">{favorites.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;