import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login action here
    console.log('Username:', username);
    console.log('Password:', password);

    // After successful login, navigate to the Navbar page
    navigate(''); // Replace with your desired route for the Navbar page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Log In</h2>
        <form onSubmit={handleSubmit}>
          {/* Username field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-600 hover:text-green-500">Forgot password?</a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Log In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
