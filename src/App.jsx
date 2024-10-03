import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import FormPage from './components/FormPage'
import Modal1 from './components/Modal1';
import ProjectFormModal from './components/ProjectFormModal'; // Import the modal

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control for Modal1
  const [isProjectFormModalOpen, setIsProjectFormModalOpen] = useState(false); // Control for ProjectFormModal

  // Function to handle opening the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Pass the openModal function to Navbar */}
          

          <Routes>
            <Route path="/" element={<Navbar openModal={openModal} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/FormPage" element={<FormPage />} />
          </Routes>
        </main>

        {/* Conditionally render the Modal1 */}
        {isModalOpen && (
          <Modal1
            isOpen={isModalOpen}
            onClose={closeModal} // Close button logic
            openProjectFormModal={() => setIsProjectFormModalOpen(true)} // Open Project Form Modal
          />
        )}

        {/* Conditionally render the Project Form Modal */}
        {isProjectFormModalOpen && (
          <ProjectFormModal onClose={() => setIsProjectFormModalOpen(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;
