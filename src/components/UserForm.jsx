import React, { useState } from 'react';

const UserForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    user_id: '',
    username: '',
    password_hash: '',
    email: '',
    role: '',
    created_at: '',
    updated_at: '',
    is_active: false,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Here you can send formData to your backend API
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg ">
      <h1 className="text-3xl font-bold mb-6 text-center">User Form</h1>
      <form onSubmit={handleSubmit}>
      
      <div className="mb-4">
          <label htmlFor="user_id" className="block text-gray-700 font-semibold mb-2">User ID</label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter user ID"
            required
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter username"
            required
          />
        </div>

        {/* Password Hash */}
        <div className="mb-4">
          <label htmlFor="password_hash" className="block text-gray-700 font-semibold mb-2">Password Hash</label>
          <input
            type="password"
            id="password_hash"
            name="password_hash"
            value={formData.password_hash}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter password_hash"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter email"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Role</label>
          <select
            type="role"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter role"
            required
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">Supervisor</option>
            <option value="manager">Surveyor</option>
          </select>
        </div>

        {/* Is Active */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_active"
            checked={formData.is_active}
            onChange={handleChange}
            className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700">Is Active</label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
  );
};

export default UserForm;
