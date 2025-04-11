
// LoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { userStore } from './users';

// let users = [
//   { email: 'lavanya@example.com', password: 'lavanya123' },
//   { email: 'geetha@example.com', password: 'getha456' },
// ];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = userStore.users.find((u) => u.email === email && u.password === password);
    if (user) {
      toast.success('Login successful! 🎉');
      // Redirect or dashboard logic here
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-800">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border rounded "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-center">
          New user?{' '}
          <Link to="/signup" className="text-red-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

