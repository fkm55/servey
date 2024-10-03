import React from 'react';

const Modal1 = ({ isOpen, onClose, openProjectFormModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px]">
        {/* Modal Header */}
        <div className="bg-green-600 text-white flex justify-between items-center p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Create project: Choose a source</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 text-2xl">
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Choose one of the options below to continue. You will be prompted to enter
            the name and other details in further steps.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Option 1: Build from scratch */}
            <button
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100"
              onClick={() => {
                onClose(); // Close Modal1
                openProjectFormModal(); // Open ProjectFormModal
              }}
            >
              <i className="fas fa-pencil-alt text-2xl text-blue-600"></i>
              <span className="text-sm mt-2 text-center">Build from scratch</span>
            </button>

            {/* Option 2 */}
            <button
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100"
              onClick={() => alert('Use a template clicked')}
            >
              <i className="fas fa-th-large text-2xl text-blue-600"></i>
              <span className="text-sm mt-2 text-center">Use a template</span>
            </button>

            {/* Option 3 */}
            <button
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100"
              onClick={() => alert('Upload XLSForm clicked')}
            >
              <i className="fas fa-upload text-2xl text-blue-600"></i>
              <span className="text-sm mt-2 text-center">Upload an XLSForm</span>
            </button>

            {/* Option 4 */}
            <button
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100"
              onClick={() => alert('Import XLSForm clicked')}
            >
              <i className="fas fa-link text-2xl text-blue-600"></i>
              <span className="text-sm mt-2 text-center">Import an XLSForm via URL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
