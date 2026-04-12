import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AddressForm from './AddressForm';
import PaymentStep from './PaymentStep';
import useCartStore from '../../store/useCartStore'; 
import useUserStore from '../../store/useUserStore';
import { FiPlus, FiEdit2, FiTrash2, FiCheckCircle, FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../api/axiosInstance';

const CreateOrder = () => {
  const [step, setStep] = useState(1);
  const { cart, clearCart } = useCartStore();
  const { user } = useUserStore();
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Adresleri Getir
  const fetchAddresses = useCallback(async () => {
    if (!user.token) return;
    try {
      const res = await axiosInstance.get('/user/address');
      setAddresses(res.data);

      if (res.data.length === 1) setSelectedAddress(res.data[0]);
    } catch (err) {
      console.error("Addresses could not be fetched:", err);
    }
  }, [user.token]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  // Toplam Fiyat Hesaplama
const subtotal = cart.reduce((total, item) => total + (item.price * item.count), 0);
const shipping = subtotal > 150 || cart.length === 0 ? 0 : 15;
const totalCartPrice = subtotal + shipping;

  // Siparişi Onayla ve Gönder
  const handlePlaceOrder = async () => {
    if (!selectedAddress || !selectedCard) {
      alert("Please select both an address and a payment method before placing your order.");
      return;
    }
    
    try {
      const orderPayload = {
        address_id: selectedAddress.id,
        order_date: new Date().toISOString(),
        card_no: selectedCard.card_no,
        card_name: selectedCard.name_on_card,
        card_expire_month: Number(selectedCard.expire_month),
        card_expire_year: Number(selectedCard.expire_year),
        card_ccv: 321, 
        price: Number(totalCartPrice.toFixed(2)),
        products: cart.map(item => ({
  product_id: item.id,
  count: item.count,
  detail: item.detail || "" 
}))
      };

      const res = await axiosInstance.post('/order', orderPayload);

      if (res.status === 201 || res.status === 200) {
        clearCart();
        setStep(3);
      }
    } catch (err) {
      console.error("Sipariş hatası:", err);
      alert("Order could not be placed.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl font-montserrat">

      {/* Step Indicator (Progress Bar) */}
      <div className="flex justify-between mb-12 relative max-w-md mx-auto">
        {[1, 2, 3].map((num) => (
          <div key={num} className="relative z-10 flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition-all duration-500 ${step >= num ? 'bg-primary-blue text-white scale-110' : 'bg-gray-200 text-gray-500'}`}>
              {num === 3 && step === 3 ? <FiCheckCircle /> : num}
            </div>
            <span className="text-[10px] mt-2 font-bold text-gray-400 uppercase tracking-tighter">
              {num === 1 ? "Address" : num === 2 ? "Payment" : "Success"}
            </span>
          </div>
        ))}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -translate-y-1/2">
           <div className="h-full bg-primary-blue transition-all duration-500" style={{ width: `${(step - 1) * 50}%` }}></div>
        </div>
      </div>

      {/* STEP 1: ADDRESS SELECTION */}
      {step === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-sm border">
            <div>
               <h3 className="text-xl font-bold text-dark-blue">Shipping Address</h3>
               <p className="text-sm text-gray-500">Select where you want your order delivered.</p>
            </div>
            <button 
              onClick={() => { setEditingAddress(null); setShowAddressForm(true); }}
              className="bg-primary-blue text-white px-4 py-2 rounded font-bold flex items-center gap-2 hover:bg-dark-blue transition-all"
            >
              <FiPlus /> New Address
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses.map((addr) => (
              <div 
                key={addr.id}
                onClick={() => setSelectedAddress(addr)}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all relative ${selectedAddress?.id === addr.id ? 'border-primary-blue bg-blue-50/30' : 'bg-white border-gray-100 hover:border-gray-200'}`}
              >
                <div className="flex justify-between font-bold text-dark-blue mb-2">
                  <span className="uppercase text-xs tracking-widest text-primary-blue">{addr.title}</span>
                  <div className="flex gap-3 text-gray-400">
                    <FiEdit2 onClick={(e) => { e.stopPropagation(); setEditingAddress(addr); setShowAddressForm(true); }} className="hover:text-primary-blue" />
                   </div>
                </div>
                <p className="font-bold">{addr.name} {addr.surname}</p>
                <p className="text-sm text-gray-600 mt-1">{addr.neighborhood}, {addr.district}</p>
                <p className="text-sm text-gray-600">{addr.city}</p>
                {selectedAddress?.id === addr.id && <FiCheckCircle className="absolute bottom-4 right-4 text-primary-blue text-xl" />}
              </div>
            ))}
          </div>

          <button 
            disabled={!selectedAddress}
            onClick={() => setStep(2)} 
            className={`w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all ${selectedAddress ? 'bg-primary-blue text-white hover:bg-dark-blue' : 'bg-gray-300 text-white cursor-not-allowed'}`}
          >
            Continue to Payment
          </button>
        </div>
      )}

{step === 2 && (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-white p-8 rounded-xl shadow-md border">
      {user?.token ? (
        <PaymentStep axiosWithAuth={axiosInstance} onSelectCard={setSelectedCard} />
      ) : (
        <p>Loading or not logged in...</p>
      )}
      
      <div className="flex gap-4 mt-8 border-t pt-8">
        <button onClick={() => setStep(1)} className="w-1/3 border-2 py-4 rounded-lg font-bold text-gray-500">
          Back
        </button>
        <button 
          disabled={!selectedCard}
          onClick={handlePlaceOrder}
          className={`w-2/3 py-4 rounded-lg font-bold text-lg ${selectedCard ? 'bg-primary-blue text-white' : 'bg-gray-300 text-white cursor-not-allowed'}`}
        >
          Place Order (${Number(totalCartPrice || 0).toFixed(2)})
        </button>
      </div>
    </div>
  </div>
)}
      {/* STEP 3: SUCCESS */}
{step === 3 && (
  <div className="text-center bg-white p-8 md:p-16 rounded-xl shadow-lg border animate-scaleUp max-w-2xl mx-auto">
    {/* Başarı İkonu */}
    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
      <FiCheckCircle />
    </div>
    
    <h3 className="text-3xl font-bold mb-2 text-dark-blue">Order Placed Successfully!</h3>
    <p className="text-gray-500 mb-8">Thank you for your purchase. Here is your order summary:</p>

    {/* Özet Bilgi Kartı */}
    <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-4 border">
      <div className="flex justify-between border-b pb-2">
        <span className="text-gray-500 font-medium">Delivery Address:</span>
        <span className="font-bold text-dark-blue">{selectedAddress?.title || "Home"}</span>
      </div>
      
      <div className="text-sm text-gray-600">
        <p className="font-bold">{selectedAddress?.name} {selectedAddress?.surname}</p>
        <p>{selectedAddress?.neighborhood}, {selectedAddress?.district} / {selectedAddress?.city}</p>
      </div>

      <div className="flex justify-between border-t pt-2 items-center">
        <span className="text-gray-500 font-medium">Payment:</span>
        <span className="text-sm font-mono bg-white px-2 py-1 rounded border">
          **** **** **** {String(selectedCard?.card_no).slice(-4)}
        </span>
      </div>

      <div className="flex justify-between items-center pt-2">
        <span className="text-lg font-bold text-dark-blue">Total Amount:</span>
        <span className="text-2xl font-bold text-primary-blue">${Number(totalCartPrice || 0).toFixed(2)}</span>
      </div>
    </div>

    {/* Aksiyon Butonları */}
    <div className="flex flex-col gap-3 max-w-xs mx-auto">
      <button 
        onClick={() => navigate('/previous-orders')} 
        className="bg-primary-blue text-white py-4 rounded-md font-bold hover:bg-dark-blue transition-all shadow-md"
      >
        View My Orders
      </button>
      <button 
        onClick={() => navigate('/')} 
        className="text-primary-blue font-bold hover:underline transition-all"
      >
        Continue Shopping
      </button>
    </div>
  </div>
)}

      {/* MODAL: ADDRESS FORM */}
      {showAddressForm && (
        <AddressForm 
          onClose={() => setShowAddressForm(false)} 
          refresh={fetchAddresses} 
          axiosWithAuth={axiosInstance}
          editData={editingAddress}
        />
      )}
    </div>
  );
};

export default CreateOrder;