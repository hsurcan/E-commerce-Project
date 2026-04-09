import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const OfficeSection = () => {
  const cards = [
    {
      icon: <FiPhone className="text-primary-blue text-7xl" />,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      label: "Get Support",
      dark: false,
    },
    {
      icon: <FiMapPin className="text-primary-blue text-7xl" />,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      label: "Get Support",
      dark: true,
    },
    {
      icon: <FiMail className="text-primary-blue text-7xl" />,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      label: "Get Support",
      dark: false,
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] md:bg-white text-center">
      <div className="container mx-auto px-6">
        <h6 className="font-bold text-dark-blue text-sm uppercase mb-4 tracking-widest">Visit Our Office</h6>
        <h2 className="text-4xl font-bold text-dark-blue mb-20 max-w-xl mx-auto leading-snug">
          We help small businesses with big ideas
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-full max-w-[330px] p-12 flex flex-col items-center gap-4 transition-transform hover:scale-105 ${
                card.dark 
                ? "bg-[#252B42] text-white py-20" 
                : "bg-white text-dark-blue"
              }`}
            >
              {card.icon}
              <div className="font-bold text-sm">
                <p>{card.emails[0]}</p>
                <p>{card.emails[1]}</p>
              </div>
              <h5 className="font-bold text-lg mt-4">{card.label}</h5>
              <button className={`mt-2 px-8 py-4 border rounded-lg lg:rounded-full font-bold transition-colors ${
                card.dark 
                ? "border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white" 
                : "border-primary-blue text-primary-blue hover:bg-gray-50"
              }`}>
                Submit Request
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;