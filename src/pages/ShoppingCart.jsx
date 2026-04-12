import useCartStore from '../store/useCartStore';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';

const ShoppingCart = () => {
  const { cart, updateCount, removeFromCart } = useCartStore();
  const navigate = useNavigate();
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.count), 0);
  const shipping = subtotal > 150 || cart.length === 0 ? 0 : 15;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/order');
    }
  };

  // SEPET BOŞSA
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-dark-blue">Your cart is empty</h2>
        <p className="text-second-text mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-3 rounded-md font-bold hover:bg-dark-blue transition-all">
          <FiChevronLeft /> Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 animate-fadeIn">
      {/* Ürün Listesi */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-8 text-dark-blue border-b pb-4">
          Shopping Cart ({cart.reduce((acc, item) => acc + item.count, 0)}{" "}
          Items)
        </h2>

        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b pb-6 items-center"
            >
              <img
                src={item.images?.[0]?.url || item.thumbnail || item.image}
                alt={item.title}
                className="w-24 h-32 object-contain bg-[#F3F3F3] rounded-md border"
              />

              <div className="flex-grow">
                <h4 className="font-bold text-dark-blue text-lg">
                  {item.title}
                </h4>
                <p className="text-primary-blue font-bold text-sm mb-4">
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => updateCount(item.id, -1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={item.count <= 1}
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="px-4 font-bold min-w-[40px] text-center">
                      {item.count}
                    </span>
                    <button
                      onClick={() => updateCount(item.id, 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-bold ml-4 transition-colors"
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-xl text-dark-blue">
                  ${(item.price * item.count).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sipariş Özeti */}
      <div className="w-full lg:w-96">
        <div className="bg-white border shadow-sm p-6 rounded-lg sticky top-24">
          <h3 className="text-xl font-bold mb-6 text-dark-blue border-b pb-4">
            Order Summary
          </h3>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-between text-second-text">
              <span>Subtotal</span>
              <span className="font-bold text-dark-blue">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-second-text">
              <span>Shipping</span>
              <span className="font-bold text-green-600">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-[11px] text-primary-blue bg-blue-50 p-2 rounded">
                Add <b>${(150 - subtotal).toFixed(2)}</b> more to get FREE
                shipping!
              </p>
            )}
          </div>

          <div className="flex justify-between font-bold text-2xl border-t pt-4 mb-8 text-dark-blue">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full block text-center bg-primary-blue text-white py-4 rounded-md font-bold text-lg hover:bg-dark-blue shadow-lg active:scale-95 transition-all"
          >
            Proceed to Checkout
          </button>
          <p className="text-center text-xs text-second-text mt-4">
            Tax included and shipping calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;