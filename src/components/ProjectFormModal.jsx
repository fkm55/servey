import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ProjectFormModal = ({ onClose }) => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // State variables for the form fields and loading state
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(''); // State for validation error messages

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validation logic: check if all required fields are filled
    if (!projectName || !sector || !country) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true); // Set loading state to true to show "Please wait" message

    // You can perform any validation or processing here
    console.log({
      projectName,
      description,
      sector,
      country,
    });

    // Simulate API request delay with a timeout before navigating
    setTimeout(() => {
      setLoading(false);
      navigate('/FormPage'); // Navigate to FormPage after form submission
      onClose();
    }, 2000); // 2 seconds delay to simulate API call or processing
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px]">
        {/* Modal Header */}
        <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold">Create project: Project details</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 text-2xl">
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 text-red-500 font-semibold">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="projectName" className="block text-gray-700 font-semibold mb-2">
                Project Name (required)
              </label>
              <input
                id="projectName"
                type="text"
                placeholder="Enter title of project here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <input
                id="description"
                type="text"
                placeholder="Enter short description here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="sector" className="block text-gray-700 font-semibold mb-2">
                Sector (required)
              </label>
              <select
                id="sector"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                required
              >
                <option value="">Select...</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Agriculture">Agriculture</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">
                Country (required)
              </label>
              <select
                id="country"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">Select...</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
            </div>

            {/* Modal Footer with Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                onClick={onClose} // Close modal when clicking BACK
              >
                BACK
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
                disabled={loading} // Disable button while loading
              >
                {loading ? 'Please Wait...' : 'CREATE PROJECT'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectFormModal;
