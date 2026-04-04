import { FiChevronRight, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { teamMembers } from "../api/mockdata/teamMembers";
import mainHero from "../assets/team/hero-main.jpg";
import hero1 from "../assets/team/hero-1.jpg";
import hero2 from "../assets/team/hero-2.jpg";
import hero3 from "../assets/team/hero-3.jpg";
import hero4 from "../assets/team/hero-4.jpg";


const Team = () => {

  return (
    <main className="bg-white">

      <section className="container mx-auto px-6 py-12 text-center space-y-4">
        <h5 className="font-bold text-second-text uppercase tracking-widest text-sm">What we do</h5>
        <h1 className="text-4xl md:text-6xl font-bold text-dark-blue">Innovation tailored for you</h1>
        <div className="flex items-center justify-center gap-2 font-bold text-sm pt-4">
          <span>Home</span>
          <FiChevronRight className="text-muted-text" />
          <span className="text-second-text">Team</span>
        </div>
      </section>


      <section className="w-full mb-20">
        <div className="flex flex-col md:flex-row gap-2 h-auto md:h-[530px]">

          <div className="w-full md:w-1/2 md:h-full">
            <img src={mainHero} alt="Main Team" className="w-full h-full object-cover" />
          </div>
     
          <div className="w-full md:w-1/2 grid grid-cols-4 gap-2 md:h-full overflow-hidden">
            <img src={hero1} alt="Team 1" className="w-full h-full object-cover" />
            <img src={hero2} alt="Team 2" className="w-full h-full object-cover" />
            <img src={hero3} alt="Team 3" className="w-full h-full object-cover" />
            <img src={hero4} alt="Team 4" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

     
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-dark-blue text-center mb-20">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group transition-transform hover:-translate-y-2">
              <div className="w-full overflow-hidden mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-[4/3] object-cover" 
                />
              </div>
              <h5 className="font-bold text-dark-blue text-lg">{member.name}</h5>
              <p className="font-bold text-second-text text-sm mt-2">{member.profession}</p>
              <div className="flex gap-5 text-2xl text-primary-blue mt-4">
                <FiFacebook className="cursor-pointer hover:text-dark-blue transition-colors" />
                <FiInstagram className="cursor-pointer hover:text-dark-blue transition-colors" />
                <FiTwitter className="cursor-pointer hover:text-dark-blue transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 text-center space-y-8">
        <h2 className="text-4xl font-bold text-dark-blue">Start your 14 days free trial</h2>
        <p className="text-second-text text-sm max-w-sm mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <button className="bg-primary-blue text-white px-10 py-4 rounded-md font-bold text-sm uppercase hover:shadow-lg transition-all">
          Try it free now
        </button>
        <div className="flex justify-center gap-8 text-3xl pt-4">
            <FiTwitter className="text-[#55ACEE] cursor-pointer" />
            <FiFacebook className="text-[#395185] cursor-pointer" />
            <FiInstagram className="text-black cursor-pointer" />
            <FiLinkedin className="text-[#0A66C2] cursor-pointer" />
        </div>
      </section>
    </main>
  );
};

export default Team;