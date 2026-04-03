import client1 from '../../assets/home/client1.png';
import client2 from '../../assets/home/client2.png';
import client3 from '../../assets/home/client3.png';
import client4 from '../../assets/home/client4.png';
import client5 from '../../assets/home/client5.png';
import client6 from '../../assets/home/client6.png';

const Clients = () => {
  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <section className="py-20 md:py-20 bg-white">
      <div className="container mx-auto px-40">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 md:gap-8">
          {clients.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Client ${index + 1}`} 
              className="h-18 md:h-18 object-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;