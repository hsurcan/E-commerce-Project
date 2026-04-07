import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import team4 from   '../../assets/team/team-4.jpg';
import team6 from   '../../assets/team/team-6.jpg';
import team7 from   '../../assets/team/team-7.jpg';

const TeamSection = () => {
 const teamMembers = [
    {
      name: "John Doe",
      profession: "CEO & Graphic Designer",
      img: team4
    },
    {
      name: "Manny Thompson",
      profession: "Content Writer",
      img: team6
    },
    {
      name: "Jennifer Lee",
      profession: "Content Writer",
      img: team7
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-dark-blue mb-4">Meet Our Team</h2>
        <p className="text-sm font-normal text-second-text max-w-sm mx-auto mb-16 lg:mb-20">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full flex flex-col items-center bg-white group overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full object-cover aspect-square md:aspect-auto" />
              <div className="p-8 space-y-3">
                <h5 className="font-bold text-lg text-dark-blue">{member.name}</h5>
                <p className="font-bold text-sm text-second-text">{member.profession}</p>
                <div className="flex gap-5 text-2xl text-primary-blue pt-4">
                  <FiFacebook className="cursor-pointer hover:opacity-80 transition-opacity" />
                  <FiInstagram className="cursor-pointer hover:opacity-80 transition-opacity" />
                  <FiTwitter className="cursor-pointer hover:opacity-80 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;