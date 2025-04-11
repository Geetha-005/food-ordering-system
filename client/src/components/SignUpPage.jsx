
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { userStore } from './users';
// Shared users array (mock)
// let users = [
//   { email: 'lavanya@example.com', password: 'lavanya123' },
//   { email: 'geetha@example.com', password: 'getha456' },
// ];

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('All fields are required');
      return;
    }

    const userExists = userStore.users.some((u) => u.email === email);
    if (userExists) {
      toast.error('User already exists. Try signing in.');
      return;
    }

    userStore.users.push({ email, password });
    toast.success('Sign up successful! Redirecting to login...');

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-800 ">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"

          className="w-full px-4 py-2 mb-4 border rounded"
          value={email}
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border rounded"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
