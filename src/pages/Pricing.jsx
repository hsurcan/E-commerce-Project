import { useState } from "react";
import { FiCheck, FiChevronRight, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import ClientsSection from "../components/about/ClientsSection";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "FREE",
      price: "0",
      description: "Organize across all apps by hand",
      features: ["Unlimited product updates", "Unlimited product updates", "Unlimited product updates", "1GB Cloud storage", "Email and community support"],
      isFeatured: false,
    },
    {
      name: "STANDARD",
      price: "9.99",
      description: "Organize across all apps by hand",
      features: ["Unlimited product updates", "Unlimited product updates", "Unlimited product updates", "15GB Cloud storage", "Email and community support"],
      isFeatured: true,
    },
    {
      name: "PREMIUM",
      price: "19.99",
      description: "Organize across all apps by hand",
      features: ["Unlimited product updates", "Unlimited product updates", "Unlimited product updates", "100GB Cloud storage", "Email and community support"],
      isFeatured: false,
    }
  ];

  return (
    <main className="bg-[#FAFAFA] md:bg-white overflow-hidden">
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 py-12 text-center space-y-4">
        <h5 className="font-bold text-second-text uppercase tracking-widest text-sm">Pricing</h5>
        <h1 className="text-5xl font-bold text-dark-blue">Simple Pricing</h1>
        <div className="flex items-center justify-center gap-2 font-bold text-sm">
          <span>Home</span>
          <FiChevronRight className="text-muted-text" />
          <span className="text-second-text">Pricing</span>
        </div>
      </section>

      {/* 2. Toggle & Description */}
      <section className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-4xl font-bold text-dark-blue mb-4">Pricing</h2>
        <p className="text-second-text max-w-sm mx-auto text-sm mb-12">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`font-bold ${!isYearly ? 'text-dark-blue' : 'text-second-text'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-white border border-primary-blue rounded-full relative transition-colors"
          >
            <div className={`absolute top-1 w-5 h-5 bg-[#D0D0D0] rounded-full transition-all ${isYearly ? 'left-8' : 'left-1'}`}></div>
          </button>
          <span className={`font-bold ${isYearly ? 'text-dark-blue' : 'text-second-text'}`}>Yearly</span>
          <span className="bg-[#B2E3FF] text-primary-blue px-4 py-2 rounded-full text-sm font-bold">Save 25%</span>
        </div>

        {/* 3. Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-0">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`w-full max-w-[330px] p-10 rounded-lg border border-primary-blue flex flex-col space-y-8 transition-all
                ${plan.isFeatured 
                  ? 'bg-dark-blue text-white lg:py-16 lg:-my-8 z-10 shadow-2xl scale-105 border-none' 
                  : 'bg-white text-dark-blue lg:py-10'}`}
            >
              <h3 className="text-2xl font-bold uppercase">{plan.name}</h3>
              <p className={`font-bold text-sm ${plan.isFeatured ? 'text-white' : 'text-second-text'}`}>{plan.description}</p>
              <div className="flex items-center justify-center gap-2 text-primary-blue">
                <span className="text-4xl font-bold">{plan.price}</span>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-2xl font-bold">$</span>
                  <span className="text-xs font-bold opacity-70">Per Month</span>
                </div>
              </div>
              <ul className="space-y-4 text-left">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm font-bold">
                    <div className={`p-1 rounded-full ${fIndex < 3 ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'} text-white`}>
                      <FiCheck />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-md font-bold text-sm uppercase transition-all
                ${plan.isFeatured ? 'bg-primary-blue text-white hover:bg-opacity-90' : 'bg-dark-blue text-white hover:opacity-90'}`}>
                Try for free
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trusted Clients */}
      <div className="py-20 bg-[#FAFAFA]">
        <p className="text-center text-second-text mb-12">Trusted By Over 4000 Big Companies</p>
        <ClientsSection />
      </div>

      {/* 5. Pricing FAQ */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-dark-blue text-center mb-4">Pricing FAQs</h2>
        <p className="text-second-text text-center max-w-sm mx-auto mb-20">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex gap-4">
              <FiChevronRight className="text-primary-blue text-xl mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h4 className="font-bold text-dark-blue">the quick fox jumps over the lazy dog</h4>
                <p className="text-second-text text-sm leading-relaxed">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT mollie
                  nisi aliquip velit auctor est etiam poseuer.
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-second-text mt-20">Haven't got your answer? Contact our support</p>
      </section>

      {/* 6. Trial CTA */}
      <section className="container mx-auto px-6 py-24 text-center space-y-8">
        <h2 className="text-4xl font-bold text-dark-blue">Start your 14 days free trial</h2>
        <p className="text-second-text text-sm max-w-sm mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <button className="bg-primary-blue text-white px-10 py-4 rounded-md font-bold text-sm uppercase hover:bg-opacity-90 transition-all">
          Try it free now
        </button>
        <div className="flex justify-center gap-8 text-3xl">
            <FiTwitter className="text-[#55ACEE] cursor-pointer" />
            <FiFacebook className="text-[#395185] cursor-pointer" />
            <FiInstagram className="text-black cursor-pointer" />
            <FiLinkedin className="text-[#0A66C2] cursor-pointer" />
        </div>
      </section>
    </main>
  );
};

export default Pricing;