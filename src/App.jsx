import { Routes, Route } from "react-router-dom";
import { useAutoLogin } from './store/useAutoLogin';

import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

//Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import AuthPage from "./pages/Login/AuthPage";
import ProfilePage from "./pages/Login/ProfilePage";
import Product from "./pages/Product";



function App() {
  const { isLoading } = useAutoLogin();
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-montserrat">
      <TopBar />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;