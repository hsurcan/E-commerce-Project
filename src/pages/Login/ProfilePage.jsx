import useUserStore from '../../store/useUserStore';
import { useNavigate } from 'react-router-dom';
import { FiPackage, FiMapPin, FiCreditCard, FiLogOut, FiUser, FiChevronRight } from 'react-icons/fi';

const ProfilePage = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-md mx-auto bg-gray-50 p-10 rounded-xl border border-dashed border-gray-300">
          <FiUser className="mx-auto text-5xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-dark-blue mb-2">Please Log In</h2>
          <p className="text-gray-500 mb-6">To view your profile, please log in to your account.</p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-primary-blue text-white px-8 py-3 rounded-md font-bold hover:shadow-lg transition-all"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const menuItems = [
    {
      title: "Orders",
      desc: "Track your orders and shipping status",
      icon: <FiPackage className="text-orange-500" />,
      path: "/previous-orders",
      color: "bg-orange-50"
    },
    {
      title: "Address Information",
      desc: "Manage your delivery and billing addresses",
      icon: <FiMapPin className="text-blue-500" />,
      path: "/address-info", 
      color: "bg-blue-50"
    },
    {
      title: "Payment Methods",
      desc: "Manage your saved credit and debit cards",
      icon: <FiCreditCard className="text-green-500" />,
      path: "/payment-methods", 
      color: "bg-green-50"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Üst Profil Kartı */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              {/* Harfli Avatar Yapısı */}
              <div className="w-28 h-28 rounded-full bg-primary-blue flex items-center justify-center text-white text-3xl font-bold shadow-inner border-4 border-white ring-1 ring-gray-100">
                {getInitials(user.name)}
              </div>
              <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white shadow-sm"></div>
            </div>
            
            <div className="text-center md:text-left flex-grow">
              <h2 className="text-3xl font-bold text-dark-blue">{user.name}</h2>
              <p className="text-gray-500 font-medium">{user.email}</p>
              <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-bold uppercase tracking-wider">
                Active Member
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 font-bold transition-colors border px-4 py-2 rounded-lg hover:border-red-100"
            >
              <FiLogOut /> Log Out
            </button>
          </div>

          {/* Menü Grid Yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-dark-blue ml-2">Account Management</h3>
              {menuItems.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-blue cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${item.color} p-3 rounded-lg text-2xl`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-blue group-hover:text-primary-blue transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-300 group-hover:text-primary-blue" />
                </div>
              ))}
            </div>

            {/* Yan Panel */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-dark-blue mb-6 pb-2 border-b">Personal Information</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Full Name</label>
                  <p className="text-dark-blue font-semibold">{user.name}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Email</label>
                  <p className="text-dark-blue font-semibold">{user.email}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Account Created</label>
                  <p className="text-dark-blue font-semibold">April 2026</p>
                </div>
                <button className="w-full mt-4 py-2 px-4 rounded border border-primary-blue text-sm font-bold text-primary-blue hover:bg-primary-blue hover:text-white transition-all text-center">
                  Update Profile Details
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;