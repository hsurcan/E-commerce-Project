import client1 from "../../assets/home/client1.png"; 
import client2 from "../../assets/home/client2.png"; 
import client3 from "../../assets/home/client3.png"; 
import client4 from "../../assets/home/client4.png"; 
import client5 from "../../assets/home/client5.png"; 
import client6 from "../../assets/home/client6.png";

const ClientsSection = () => {
  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <section className="bg-[#FAFAFA] md:bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-dark-blue mb-4 hidden md:block">Big Companies Are Here</h2>
        <p className="text-sm font-normal text-second-text max-w-sm mx-auto mb-16 lg:mb-20 hidden md:block">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-12 max-w-6xl mx-auto opacity-70">
          {clients.map((client, index) => (
            <div key={index} className="w-32 lg:w-40 flex justify-center">
              <img src={client} alt={`Client ${index + 1}`} className="object-contain" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;