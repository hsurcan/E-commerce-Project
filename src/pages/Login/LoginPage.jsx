import { useState } from 'react';
import useUserStore from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from '../../api/axiosInstance';

const LoginPage = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Login State 
  const [loginData, setLoginData] = useState(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    return {
      email: savedEmail || "",
      password: "",
      rememberMe: Boolean(savedEmail)
    };
  });

  // Validasyon Regexleri
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (pass) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass);

  // --- LOGIN FUNCTION ---
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(loginData.email)) return alert("Invalid email!");

    setLoading(true);
    try {
      // Gerçek API: /login
      const response = await axiosInstance.post('/login', {
        email: loginData.email,
        password: loginData.password
      });

      const { token, ...user } = response.data;
      localStorage.setItem('token', token);

      if (loginData.rememberMe) {
        localStorage.setItem('rememberedEmail', loginData.email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      setUser(user);
      navigate("/");
    } catch (error) {
      alert("Login failed! Check your credentials.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="mx-auto px-auto py-40">
      <div className="flex flex-col lg:flex-row gap-20 justify-center max-w-6xl mx-auto">
        
        {/* LOGIN FORM */}
        <div className="w-full lg:w-1/2 space-y-8 bg-white p-8 rounded-lg shadow-sm border">
          <h2 className="text-3xl font-bold text-dark-blue">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Email address *</label>
              <input 
                type="email" 
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full p-4 border rounded-md focus:outline-primary-blue bg-gray-50" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Password *</label>
              <input 
                type="password" 
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full p-4 border rounded-md focus:outline-primary-blue bg-gray-50" 
                placeholder="Enter password"
              />
            </div>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={loginData.rememberMe}
                onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })}
                className="w-4 h-4 text-primary-blue"
              />
              <span className="text-sm text-gray-600">Remember Me</span>
            </label>
            <button 
              disabled={loading}
              type='submit'
              className="w-full bg-primary-blue text-white py-4 rounded-md font-bold hover:bg-opacity-90 transition-all disabled:bg-gray-400"
            >
              {loading ? "Processing..." : "Login"}
            </button>
            <button 
              disabled={loading}
              type='button'
              onClick={() => navigate('/signup')}
              className="w-full bg-red-500 text-white py-4 rounded-md font-bold hover:bg-opacity-90 transition-all disabled:bg-gray-400"
            >
              Don't have an account? Sign Up
            </button>
          </form>
        </div>
        </div>
      </div>
  );
};

export default LoginPage;