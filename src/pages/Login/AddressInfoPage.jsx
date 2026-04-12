import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from '../../api/axiosInstance'; 
import AddressForm from '../Orders/AddressForm';
import { FiPlus, FiEdit2, FiMapPin, FiHome } from 'react-icons/fi';

const AddressInfoPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAddr, setEditingAddr] = useState(null);

  const fetchAddresses = useCallback(async () => {
    try {
      const res = await axiosInstance.get('/user/address');
      setAddresses(res.data);
    } catch (err) { console.error(err); }
  }, []);

  useEffect(() => { fetchAddresses(); }, [fetchAddresses]);

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-dark-blue flex items-center gap-2">
          <FiMapPin className="text-primary-blue" /> My Addresses
        </h2>
        <button 
          onClick={() => { setEditingAddr(null); setShowForm(true); }}
          className="bg-primary-blue text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2"
        >
          <FiPlus /> Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <div key={addr.id} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-50 text-primary-blue text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                {addr.title}
              </span>
              <button onClick={() => { setEditingAddr(addr); setShowForm(true); }} className="text-gray-400 hover:text-primary-blue">
                <FiEdit2 size={18} />
              </button>
            </div>
            <p className="font-bold text-dark-blue">{addr.name} {addr.surname}</p>
            <p className="text-sm text-gray-500 mt-1">{addr.neighborhood}, {addr.district}</p>
            <p className="text-sm text-gray-500">{addr.city}</p>
          </div>
        ))}
      </div>

      {showForm && (
        <AddressForm 
          onClose={() => setShowForm(false)} 
          refresh={fetchAddresses} 
          axiosWithAuth={axiosInstance}
          editData={editingAddr}
        />
      )}
    </div>
  );
};

export default AddressInfoPage;