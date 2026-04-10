import useUserStore from '../../store/useUserStore';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">Please log in first.</h2>
        <button 
          onClick={() => navigate('/login')}
          className="mt-4 text-primary-blue underline"
        >
          Go to Login Page
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
        <div className="bg-primary-blue p-6 text-white text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider">Account Details</h2>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex flex-col border-b pb-4">
            <span className="text-gray-500 text-sm font-bold uppercase">Full Name</span>
            <span className="text-dark-blue text-lg font-medium">
              {user.name}
            </span>
          </div>

          <div className="flex flex-col border-b pb-4">
            <span className="text-gray-500 text-sm font-bold uppercase">Email Address</span>
            <span className="text-dark-blue text-lg font-medium">{user.email}</span>
          </div>

          {/* Sipariş Geçmişi Eklenecek*/}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm font-bold uppercase">Account Status</span>
            <span className="text-green-600 font-bold">Active Member</span>
          </div>

          <div className="pt-8">
            <button 
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-4 rounded-md font-bold uppercase hover:bg-red-600 transition-colors shadow-md"
            >
              Logout from Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;