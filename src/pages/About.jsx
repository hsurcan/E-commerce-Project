import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutVideo from "../components/about/AboutVideo";
import TeamSection from "../components/about/TeamSection";
import ClientsSection from "../components/about/ClientsSection";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <main className="bg-white overflow-x-hidden">
      <AboutHero />
      <AboutStats />
      <AboutVideo />
      <TeamSection />
      <ClientsSection />
      <AboutCTA />
    </main>
  );
};

export default About;