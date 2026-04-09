import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchOrders = async () => {
  const { data } = await axios.get('https://api.example.com/orders');
  return data;
};

const OrdersSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
    enabled: true, // Sadece sayfa açıldığında çek
  });

  if (isLoading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu!</p>;

  return (
    <ul>
      {data.map(order => <li key={order.id}>Sipariş: #{order.id}</li>)}
    </ul>
  );
};

export default OrdersSection;