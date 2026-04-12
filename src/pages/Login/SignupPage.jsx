import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { axiosInstance } from '../../api/axiosInstance';

const SignupPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Register State
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role_id: "3" 
  });

  // Validasyon Regexleri
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (pass) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass);


  // --- REGISTER FUNCTION ---
  const handleRegister = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, role_id } = registerData;

    if (!firstName || !lastName || !email || !password) return alert("All fields are required!");
    if (password !== confirmPassword) return alert("Passwords do not match!");
    if(!validateEmail(email)) return alert("Invalid email!");
    if (!validatePassword(password)) return alert("Password is too weak!");

    setLoading(true);
    try {
      const payload = {
        name: `${firstName} ${lastName}`,
        email: email,
        password: password,
        role_id: role_id
      };

      await axiosInstance.post('/signup', payload);
      
      alert("Registration successful! Please check your email to activate account.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.message || "Error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full lg:w-1/2 space-y-8 bg-white p-8 rounded-lg shadow-sm border">
        <h2 className="text-3xl font-bold text-dark-blue">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-bold mb-2">First Name *</label>
                <input 
                  type="text" 
                  value={registerData.firstName}
                  onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                  className="w-full p-4 border rounded-md bg-gray-50" 
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-bold mb-2">Last Name *</label>
                <input 
                  type="text" 
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                  className="w-full p-4 border rounded-md bg-gray-50" 
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email address *</label>
              <input 
                type="email" 
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                className="w-full p-4 border rounded-md bg-gray-50" 
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Password *</label>
              <input 
                type="password" 
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                className="w-full p-4 border rounded-md bg-gray-50" 
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Confirm Password *</label>
              <input 
                type="password" 
                value={registerData.confirmPassword}
                onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                className="w-full p-4 border rounded-md bg-gray-50" 
                placeholder="Confirm Password"
              />
            </div>
            <button 
              disabled={loading}
              type='submit'
              className="w-full bg-primary-blue text-white py-4 rounded-md font-bold hover:bg-opacity-90 transition-all disabled:bg-gray-400"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>
        </div>
      </div>
  );
};

export default SignupPage;