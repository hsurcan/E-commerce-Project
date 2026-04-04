const AboutStats = () => {
  const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        
        {/* Metin Bloğu */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 text-center lg:text-left mb-16 lg:mb-20 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-3">
             <h6 className="font-bold text-[#E74040] text-sm tracking-widest uppercase lg:hidden">
              Problem Solving
            </h6>
            <p className="text-sm font-normal text-second-text max-w-sm">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-dark-blue leading-snug">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h3>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-6xl font-bold text-dark-blue tracking-tight">{stat.value}</h2>
              <p className="text-sm font-bold text-second-text mt-2 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;