import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useState } from 'react';
import useAuthStore from '../store/authStore';

function Login() {
  const Navigate = useNavigate();
  const { login } = useAuthStore();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login for now
    login({
      name: 'Sanju',
      email: formData.email,
    });

    Navigate('/dashboard');
  };
  return (
    <AuthLayout title="Expense Tracker" subtitle="Login to your account">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>
          <input
            name="password"
            onChange={handleChange}
            value={formData.password}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-800"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition"
        >
          Login
        </button>
      </form>

      <p className="text-center text-slate-600 mt-6">
        Don't have an account?{' '}
        <Link
          to="/register"
          className="text-slate-900 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
