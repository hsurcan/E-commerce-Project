import { FiBookOpen, FiZap, FiTrendingUp } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FiBookOpen className="text-7xl text-primary-blue" />,
      title: "Easy Wins",
      desc: "Get your best looking smile now!"
    },
    {
      id: 2,
      icon: <FiZap className="text-7xl text-primary-blue" />,
      title: "Concrete",
      desc: "Defeat is a state of mind; no one is ever defeated until defeat has been accepted as a reality."
    },
    {
      id: 3,
      icon: <FiTrendingUp className="text-7xl text-primary-blue" />,
      title: "Hack Growth",
      desc: "Overcome any hurdle or any other problem."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 text-center">
        
        {/* Başlık Grubu */}
        <div className="mb-20 space-y-3">
          <h4 className="text-second-text text-xl font-medium">Featured Products</h4>
          <h3 className="text-dark-blue text-2xl font-bold uppercase tracking-wider">
            The Best Services
          </h3>
          <p className="text-second-text text-sm max-w-[300px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Özellikler Izgarası */}
        {/* Mobilde 1 sütun, masaüstünde 3 sütun */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-5 px-4">
              <div className="mb-4 transition-transform hover:scale-110 duration-300">
                {item.icon}
              </div>
              <h3 className="text-dark-blue text-2xl font-bold">{item.title}</h3>
              <p className="text-second-text text-sm leading-relaxed max-w-[240px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;