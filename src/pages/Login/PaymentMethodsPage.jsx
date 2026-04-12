import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import CardForm from '../Orders/CardForm';
import { FiCreditCard, FiPlus } from 'react-icons/fi';
import { axiosInstance } from '../../api/axiosInstance';       


const PaymentMethodsPage = ({onSelectCard }) => {

  const [cards, setCards] = useState([]);
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Kartları Listele (GET)
  const fetchCards = async () => {
    try {
      const res = await axiosInstance.get('/user/card');
      setCards(res.data);
    } catch (err) {
      console.error("Kartlar yüklenemedi:", err);
    }
  };

  useEffect(() => { fetchCards(); }, []);

  // Kart Sil (DELETE)
  const deleteCard = async (id) => {
    try {
      await axiosInstance.delete(`/user/card/${id}`);
      fetchCards();
    } catch (err) {
      alert("Card could not be deleted.");
      console.error("Card delete error:", err);
    }
  };


    return (<div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-sm border">
        <div>
          <h3 className="text-xl font-bold text-dark-blue">Payment Methods</h3>
          <p className="text-sm text-gray-500">Select a saved card or add a new one</p>
        </div>
        <button 
          onClick={() => { setEditingCard(null); setShowCardForm(true); }}
          className="flex items-center gap-2 bg-primary-blue text-white px-4 py-2 rounded font-bold hover:bg-dark-blue transition-all"
        >
          <FiPlus /> Add New Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards?.map((card) => (
          <div 
            key={card.id}
            onClick={() => { setSelectedCard(card); onSelectCard(card); }}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all relative ${selectedCard?.id === card.id ? 'border-primary-blue bg-blue-50/30' : 'bg-white border-gray-100'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <FiCreditCard size={24} className="text-gray-400" />
              <div className="flex gap-2">
                <button onClick={(e) => { e.stopPropagation(); setEditingCard(card); setShowCardForm(true); }} className="text-gray-400 hover:text-blue-500"><FiEdit2 /></button>
                <button onClick={(e) => { e.stopPropagation(); deleteCard(card.id); }} className="text-gray-400 hover:text-red-500"><FiTrash2 /></button>
              </div>
            </div>
            
            <p className="text-lg font-bold tracking-widest text-dark-blue mb-2">
              **** **** **** {card.card_no.slice(-4)}
            </p>
            
            <div className="flex justify-between text-xs font-bold text-gray-500 uppercase">
              <span>{card.name_on_card}</span>
              <span>{card.expire_month}/{card.expire_year}</span>
            </div>

            {selectedCard?.id === card.id && (
              <div className="absolute top-4 right-12 text-primary-blue">
                <FiCheckCircle size={20} />
              </div>
            )}
          </div>
        ))}
      </div>

      {showCardForm && (
        <CardForm 
          onClose={() => setShowCardForm(false)} 
          refresh={fetchCards} 
          axiosWithAuth={axiosInstance}
          editData={editingCard}
        />
      )}
    </div>
    );
};

export default PaymentMethodsPage;