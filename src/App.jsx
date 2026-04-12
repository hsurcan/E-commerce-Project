import { Routes, Route } from "react-router-dom"; 
import { useAutoLogin } from './store/useAutoLogin';
import { Navigate } from "react-router-dom";

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
import LoginPage from "./pages/Login/LoginPage";
import ProfilePage from "./pages/Login/ProfilePage";
import Product from "./pages/Product";
import ShoppingCart from "./pages/shoppingCart";
import CreateOrder from "./pages/Orders/CreateOrder";
import Favorites from "./pages/Favorites";
import SignupPage from "./pages/Login/SignupPage";
import OrderPage from "./pages/Orders/OrderPage";
import AddressInfoPage from "./pages/Login/AddressInfoPage";
import PaymentMethodsPage from "./pages/Login/PaymentMethodsPage";
import ProtectedRoute from "./pages/ProtectedRoute";

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
          {/* Genel Rotalar */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/:gender/:categoryName/:categoryId" element={<Shop />} /> 
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/favorites" element={<Favorites />} />

          {/* Login ve Hesap Rotaları */}
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
           <Route path="/login" element={<LoginPage />} />

          {/* Order Process Rotaları */}
          <Route path="/order" element={<ProtectedRoute><CreateOrder /></ProtectedRoute>} />  
          <Route path="/order/address" element={<Navigate to="/order" replace />} />
          <Route path="/order/payment" element={<Navigate to="/order" replace />} /> 
          <Route path="/address-info" element={<ProtectedRoute><AddressInfoPage /></ProtectedRoute>} />
          <Route path="/payment-methods" element={<ProtectedRoute><PaymentMethodsPage /></ProtectedRoute>} />
          <Route path="/previous-orders" element={<ProtectedRoute><OrderPage/></ProtectedRoute>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;