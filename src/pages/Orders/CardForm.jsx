import { useState } from 'react';

const CardForm = ({ onClose, refresh, axiosWithAuth, editData }) => {
  const [formData, setFormData] = useState(editData || {
    card_no: "",
    expire_month: 1,
    expire_year: 2026,
    name_on_card: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {
        ...formData,
        expire_month: Number(formData.expire_month),
        expire_year: Number(formData.expire_year)
      };

      if (editData) {
        await axiosWithAuth.put('/user/card', { ...payload, id: editData.id });
      } else {
        await axiosWithAuth.post('/user/card', payload);
      }
      refresh();
      onClose();
    } catch (err) {
      alert("Card could not be saved.");
      console.error("Card save error:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-primary-blue p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">{editData ? 'Update Card' : 'Add New Card'}</h3>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Card Number</label>
            <input 
              required
              maxLength="16"
              placeholder="1234123412341234"
              className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none"
              value={formData.card_no}
              onChange={(e) => setFormData({...formData, card_no: e.target.value})}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Cardholder Name</label>
            <input 
              required
              placeholder="Name on card"
              className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none"
              value={formData.name_on_card}
              onChange={(e) => setFormData({...formData, name_on_card: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Expire Month</label>
              <select 
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none bg-white"
                value={formData.expire_month}
                onChange={(e) => setFormData({...formData, expire_month: e.target.value})}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                  <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Expire Year</label>
              <select 
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-primary-blue outline-none bg-white"
                value={formData.expire_year}
                onChange={(e) => setFormData({...formData, expire_year: e.target.value})}
              >
                {Array.from({ length: 10 }, (_, i) => 2026 + i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="button" onClick={onClose} className="flex-1 py-3 border-2 rounded-lg font-bold text-gray-400">Cancel</button>
            <button type="submit" className="flex-1 py-3 bg-primary-blue text-white rounded-lg font-bold shadow-lg">Save Card</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;