import React, { useState } from 'react';
import {
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  PlusIcon,
  CalendarIcon,
  TrashIcon,
  MapPinIcon,
  CalculatorIcon,
  CodeBracketIcon,
  ChartBarIcon,
  EllipsisHorizontalCircleIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';

const FormPage = () => {
  const [selectedInput, setSelectedInput] = useState(null);
  const [selectOptions, setSelectOptions] = useState([
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
  ]);

  // Function to handle adding new options
  const addOption = () => {
    const newOptionId = selectOptions.length + 1;
    setSelectOptions([...selectOptions, { id: newOptionId, value: `Option ${newOptionId}` }]);
  };

  // Function to handle updating an option's value
  const handleOptionChange = (id, newValue) => {
    const updatedOptions = selectOptions.map((option) =>
      option.id === id ? { ...option, value: newValue } : option
    );
    setSelectOptions(updatedOptions);
  };

  // Function to handle deleting an option
  const deleteOption = (id) => {
    setSelectOptions(selectOptions.filter((option) => option.id !== id));
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Add Form Elements</h2>

        {/* Form Options */}
        <div className="grid grid-cols-4 gap-4">
          {/* Select One */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('selectOne')}
          >
            <PlusIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Select One</span>
          </div>

          {/* Text */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('text')}
          >
            <DocumentTextIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Text</span>
          </div>

          {/* Date */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('date')}
          >
            <CalendarIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Date</span>
          </div>

          {/* Number */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('number')}
          >
            <ChatBubbleLeftIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Number</span>
          </div>

          {/* Decimal */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('decimal')}
          >
            <EllipsisHorizontalCircleIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Decimal</span>
          </div>

          {/* Line */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('line')}
          >
            <ChartBarIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Line</span>
          </div>

          {/* Point */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('point')}
          >
            <MapPinIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Point</span>
          </div>

          {/* Area */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('area')}
          >
            <Squares2X2Icon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Area</span>
          </div>

          {/* Calculate */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('calculate')}
          >
            <CalculatorIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">Calculate</span>
          </div>

          {/* External XML */}
          <div
            className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedInput('externalXml')}
          >
            <CodeBracketIcon className="h-6 w-6 text-gray-500 mb-1" />
            <span className="text-xs">External XML</span>
          </div>
        </div>

        {/* Render the selected form element */}
        <div className="mt-8">
          {/* Handle rendering based on what is selected */}
          {selectedInput === 'selectOne' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select an option</label>
              {selectOptions.map((option) => (
                <div key={option.id} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={option.value}
                    onChange={(e) => handleOptionChange(option.id, e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    onClick={() => deleteOption(option.id)}
                    className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}

              {/* Button to add a new option */}
              <div
                onClick={addOption}
                className="mt-2 cursor-pointer text-blue-600 flex items-center hover:text-blue-800"
              >
                <PlusIcon className="h-5 w-5 mr-1" />
                <span>Add another option</span>
              </div>
            </div>
          )}

          {selectedInput === 'text' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Enter text</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter some text"
              />
            </div>
          )}

          {selectedInput === 'date' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Pick a date</label>
              <input
                type="date"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}

          {selectedInput === 'number' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Enter a number</label>
              <input
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter a number"
              />
            </div>
          )}

          {selectedInput === 'decimal' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Enter a decimal</label>
              <input
                type="number"
                step="0.01"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter a decimal number"
              />
            </div>
          )}

          {selectedInput === 'line' && (
          <div className="mb-4">
           <label className="block text-sm font-medium text-gray-700">Enter multiple lines</label>
           <textarea
            rows="4"
           className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           placeholder="Enter multiple lines"
       />
         {/* Render the line input */}
        </div>
        )}


          {selectedInput === 'point' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Enter a point</label>
              {/* Render the point input */}
            </div>
          )}

          {selectedInput === 'area' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Enter an area</label>
              {/* Render the area input */}
            </div>
          )}

          {selectedInput === 'calculate' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Enter a calculation</label>
              {/* Render the calculate input */}
            </div>
          )}

          {selectedInput === 'externalXml' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Enter external XML</label>
              {/* Render the external XML input */}
            </div>
          )}
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
