import { useState } from 'react';

const AddressForm = ({ onClose, refresh, axiosWithAuth, editData }) => {

  const [formData, setFormData] = useState(editData || {
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "" 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editData) {
        await axiosWithAuth.put('/user/address', { ...formData, id: editData.id });
      } else {
        await axiosWithAuth.post('/user/address', formData);
      }
      refresh(); 
      onClose(); 
    } catch (err) {
      console.error("Address could not be saved:", err);
      alert("Something went wrong while saving the address.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Header */}
        <div className="bg-primary-blue p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">{editData ? 'Update Address' : 'Add New Address'}</h3>
          <button onClick={onClose} className="text-2xl hover:rotate-90 transition-transform">&times;</button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Address Title</label>
            <input 
              required
              placeholder="e.g., Home, Office"
              className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none transition-all"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
              <input 
                required
                placeholder="Alişan"
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Surname</label>
              <input 
                required
                placeholder="Karababa"
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none"
                value={formData.surname}
                onChange={(e) => setFormData({...formData, surname: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
            <input 
              required
              placeholder="053XXXXXXXX"
              className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">City</label>
              <select 
                required
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none bg-white"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              >
                <option value="">Select City</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">District</label>
              <input 
                required
                placeholder="Esenler"
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none"
                value={formData.district}
                onChange={(e) => setFormData({...formData, district: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Address Details (Neighborhood, Street...)</label>
            <textarea 
              required
              rows="3"
              placeholder="Street, building and door numbers..."
              className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none resize-none"
              value={formData.neighborhood}
              onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 py-3 border-2 border-gray-100 rounded-lg font-bold text-gray-400 hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 py-3 bg-primary-blue text-white rounded-lg font-bold hover:bg-dark-blue shadow-lg transition-all"
            >
              {editData ? 'Update Address' : 'Save Address'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;