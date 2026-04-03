import { Routes, Route } from "react-router-dom";
import TopBar from "./components/layout/TopBar.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

//Pages
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";      


function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;