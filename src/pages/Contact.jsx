import ContactHero from "../components/contact/ContactHero";
import OfficeSection from "../components/contact/OfficeSection";
import ContactFooter from "../components/contact/ContactFooter"; // Yeni ekledik

const Contact = () => {
  return (
    <main className="bg-white overflow-x-hidden">
      <ContactHero />
      <OfficeSection />
      <ContactFooter /> 
    </main>
  );
};

export default Contact;