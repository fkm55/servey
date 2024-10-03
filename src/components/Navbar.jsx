import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ openModal }) => {
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-700">KoboToolbox</h2>
        </div>
        <nav>
          <ul>
            <li>
              <button
                onClick={openModal} // Correctly open the modal using the function passed as a prop
                className="w-full text-left p-2 bg-green-500 text-white font-bold"
              >
                New
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 hover:bg-gray-100">
                Deployed <span className="text-gray-500 ml-2">(0)</span>
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 hover:bg-gray-100">
                Draft <span className="text-gray-500 ml-2">(0)</span>
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 hover:bg-gray-100">
                Archived <span className="text-gray-500 ml-2">(0)</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">My Projects</h1>
          <div>
            <button className="text-green-500 hover:underline mr-4">Filter</button>
            <button className="text-green-500 hover:underline">Fields</button>
          </div>
        </div>

        {/* Header with Search Bar */}
        <div className="w-1/3">
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Search..."
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left text-gray-600 font-medium">Project name</th>
                <th className="text-left text-gray-600 font-medium">Status</th>
                <th className="text-left text-gray-600 font-medium">Owner</th>
                <th className="text-left text-gray-600 font-medium">Date modified</th>
                <th className="text-left text-gray-600 font-medium">Date deployed</th>
                <th className="text-left text-gray-600 font-medium">Submissions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-6">
                  There are no projects to display.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
