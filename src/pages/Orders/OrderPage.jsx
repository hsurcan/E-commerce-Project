import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useUserStore from '../../store/useUserStore';
import { FiPackage, FiChevronDown, FiChevronUp, FiCalendar, FiCreditCard } from 'react-icons/fi';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { user } = useUserStore();

  const baseURL = import.meta.env.VITE_API_URL;

  const fetchOrders = useCallback(async () => {
    if (!user?.token) return;

    try {
      setLoading(true);
      const res = await axios.get(`${baseURL}/order`, {
        headers: { Authorization: user.token }
      });
      
      if (res.data && Array.isArray(res.data)) {
        setOrders([...res.data].reverse());
      }
    } catch (err) {
      console.error("Orders could not be fetched", err);
    } finally {
      setLoading(false);
    }
  }, [user?.token, baseURL]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const toggleOrder = (id) => {
    setExpandedOrder(expandedOrder === id ? null : id);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl font-montserrat min-h-screen">
      <h2 className="text-3xl font-bold text-dark-blue mb-8 flex items-center gap-3">
        <FiPackage className="text-primary-blue" /> My Previous Orders
      </h2>

      {orders.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
          <p className="text-gray-500 font-medium">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Order Header */}
              <div 
                onClick={() => toggleOrder(order.id)}
                className="p-6 cursor-pointer flex flex-wrap justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex gap-8">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Order Date</p>
                    <p className="font-semibold flex items-center gap-2 text-dark-blue">
                      <FiCalendar className="text-primary-blue" /> 
                      {new Date(order.order_date).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Amount</p>
                    <p className="font-bold text-primary-blue text-lg">${order.price?.toFixed(2)}</p>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Order ID</p>
                    <p className="font-mono text-sm text-gray-500">#{order.id}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Confirmed</span>
                  {expandedOrder === order.id ? <FiChevronUp size={20} className="text-gray-400"/> : <FiChevronDown size={20} className="text-gray-400"/>}
                </div>
              </div>

              {/* Order Details */}
              {expandedOrder === order.id && (
                <div className="p-6 border-t bg-gray-50 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Ürünler */}
                    <div>
                      <h4 className="font-bold mb-4 border-b pb-2 text-dark-blue">Products Detail</h4>
                      <div className="space-y-3">
                        {order.products?.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-lg border shadow-sm">
                            <div>
                              <p className="font-bold text-sm text-dark-blue">Product ID: {item.product_id}</p>
                              <p className="text-xs text-gray-500 font-medium">{item.detail || 'Standard'}</p>
                            </div>
                            <p className="font-bold text-primary-blue">x{item.count}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bilgiler */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold mb-2 border-b pb-2 text-dark-blue">Shipping Summary</h4>
                        <div className="bg-white p-3 rounded-lg border text-sm text-gray-600">
                           Address ID: {order.address_id}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 border-b pb-2 text-dark-blue">Payment Method</h4>
                        <div className="bg-white p-3 rounded-lg border flex items-center gap-3">
                          <FiCreditCard className="text-gray-400" size={24} />
                          <div>
                            <p className="text-sm font-bold text-dark-blue">**** {String(order.card_no).slice(-4)}</p>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">{order.card_name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;