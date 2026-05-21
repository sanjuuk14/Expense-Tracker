import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome, {user?.name}
            </h1>
            <p className="text-slate-500 mt-1">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
