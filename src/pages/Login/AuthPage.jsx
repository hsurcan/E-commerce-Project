import { useState } from 'react';
import useUserStore from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ 
    email: "", 
    password: "" 
  });

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  //Login function
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      alert("Lütfen tüm alanları doldurunuz!");
      return; 
    }

    // Her şey tamamsa Zustand'ı güncelle
    setUser({ name: loginData.email.split('@')[0], email: loginData.email });
    navigate("/");
  };

  //Register function
  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = registerData;

    // Boş alan kontrolü
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Tüm alanlar zorunludur!");
      return;
    }

    // Şifre eşleşme kontrolü
    if (password !== confirmPassword) {
      alert("Şifreler birbiriyle uyuşmuyor!");
      return;
    }

    // Email formatı kontrolü
    if (!email.includes("@")) {
      alert("Geçerli bir email giriniz!");
      return;
    }

    // Kayıt başarılı
    setUser({ name: firstName, email: email });
    navigate("/");
  };

  return (
   <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-20 justify-between">
        
        {/* SOL TARAF: LOGIN FORMU */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold text-dark-blue">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Email address *</label>
              <input 
              type="email" 
              required 
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              placeholder="Email" 
              className="w-full p-4 border rounded-md bg-gray-50 focus:outline-primary-blue" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Password *</label>
              <input 
              type="password" 
              required 
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              placeholder="Password" 
              className="w-full p-4 border rounded-md bg-gray-50 focus:outline-primary-blue" />
            </div>
            <button onClick={handleLogin} className="bg-primary-blue text-white px-10 py-4 rounded-md font-bold w-full lg:w-auto hover:bg-opacity-90 transition-all">
              Login
            </button>
          </form>
        </div>

        {/* SAĞ TARAF: REGISTER FORMU */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold text-dark-blue">Register</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-bold mb-2">First Name *</label>
                <input 
                type="text" 
                required 
                value={registerData.firstName}
                onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                placeholder="First Name" 
                className="w-full p-4 border rounded-md bg-gray-50 focus:outline-primary-blue" />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-bold mb-2">Last Name *</label>
                <input 
                type="text" 
                required 
                value={registerData.lastName}
                onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                placeholder="Last Name" 
                className="w-full p-4 border rounded-md bg-gray-50 focus:outline-primary-blue" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email address *</label>
              <input 
              type="email" 
              required 
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              placeholder="Email" 
              className="w-full p-4 border rounded-md bg-gray-50 focus:outline-primary-blue" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Password *</label>
              <input 
              type="password" 
              required 
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              placeholder="Password" 
              className="w-full p-4 border rounded-md bg-gray-50 focus:outline-primary-blue" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Confirm Password *</label>
              <input 
              type="password" 
              required 
              value={registerData.confirmPassword}
              onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
              placeholder="Confirm Password" 
              className="w-full p-4 border rounded-md bg-gray-50 focus:outline-primary-blue" />
            </div>
            <button onClick={handleRegister} className="bg-primary-blue text-white px-10 py-4 rounded-md font-bold w-full lg:w-auto hover:bg-opacity-90 transition-all">
              Register
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default AuthPage;