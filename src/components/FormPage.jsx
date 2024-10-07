import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Importing delete icon from react-icons

// Define the available question types
const formOptions = [
  { label: "Select One", value: "select_one" },
  { label: "Select Many", value: "select_many" },
  { label: "Text", value: "text" },
  { label: "Number", value: "number" },
  { label: "Date & Time", value: "date_time" },
  { label: "Photo", value: "photo" },
  { label: "Audio", value: "audio" },
  { label: "Video", value: "video" },
  { label: "File", value: "file" },
  { label: "Barcode/QR Code", value: "barcode" },
  { label: "Rating", value: "rating" },
  { label: "Range", value: "range" },
];

const FormPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectOneOptions, setSelectOneOptions] = useState(["Option 1", "Option 2"]);

  // Add a new question type to the list directly after clicking it
  const handleSelectOption = (option) => {
    setQuestions([...questions, option.value]);
  };

  // Delete a specific question
  const deleteQuestion = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  // Add a new option for "Select One"
  const addSelectOneOption = () => {
    setSelectOneOptions([...selectOneOptions, `Option ${selectOneOptions.length + 1}`]);
  };

  // Delete a specific option within "Select One"
  const deleteSelectOneOption = (indexToDelete) => {
    setSelectOneOptions(selectOneOptions.filter((_, index) => index !== indexToDelete));
  };

  // Render the appropriate input type based on the selected option
  const renderQuestionInput = (questionType, index) => {
    switch (questionType) {
      case "select_one":
        return (
          <div key={index} className="w-full mb-14 p-4 border border-green-300 rounded-lg bg-white shadow-sm">
            <label className="block font-semibold mb-2">Select One</label>
            {selectOneOptions.map((option, i) => (
              <div key={i} className="flex items-center mb-2">
                <input
                  type="text"
                  value={option}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={`Option ${i + 1}`}
                />
                {/* Delete option icon */}
                <FaTrash
                  className="text-red-500 ml-2 cursor-pointer"
                  onClick={() => deleteSelectOneOption(i)}
                />
              </div>
            ))}
            <button
              onClick={addSelectOneOption}
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 mt-2"
            >
              + Add another option
            </button>
          </div>
        );
      case "text":
        return (
          <div key={index} className="w-full mb-4 p-4 border border-green-300 rounded-lg bg-white shadow-sm">
            <label className="block font-semibold mb-2">Text</label>
            <input
              type="text"
              className="w-full p-2 border border-green-300 rounded"
              placeholder="Enter text"
            />
          </div>
        );
      // Add similar cases for other question types (e.g. select_many, number, date_time, etc.)
      case "number":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Number</label>
            <input
              type="number"
              className="w-full p-2 border border-green-300 rounded"
              placeholder="Enter a number"
            />
          </div>
        );
      case "date_time":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-2 border border-green-300 rounded"
            />
          </div>
        );
      case "photo":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Photo</label>
            <input type="file" accept="image/*" className="w-full p-2" />
          </div>
        );
      case "audio":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Audio</label>
            <input type="file" accept="audio/*" className="w-full p-2" />
          </div>
        );
      case "video":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Video</label>
            <input type="file" accept="video/*" className="w-full p-2" />
          </div>
        );
      case "file":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">File</label>
            <input type="file" className="w-full p-2" />
          </div>
        );
      case "barcode":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Barcode/QR Code</label>
            <input
              type="text"
              className="w-full p-2 border border-green-300 rounded"
              placeholder="Scan or enter code"
            />
          </div>
        );
      case "rating":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Rating</label>
            <input
              type="range"
              min="1"
              max="5"
              className="w-full"
              step="1"
            />
          </div>
        );
      case "range":
        return (
          <div key={index} className="w-full mb-4">
            <label className="block font-semibold mb-2">Range</label>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full"
              step="1"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Form Builder</h1>

      {/* Add Form */}
      <div className="bg-white p-4 rounded shadow-lg">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Project Title</label>
          <input
            type="text"
            className="w-full p-2 border border-green-300 rounded"
            placeholder="Enter your project title"
          />
        </div>

        {/* Displaying the added questions with proper input rendering */}
        {questions.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold">Added Questions:</h3>
            <ul className="mt-2">
              {questions.map((question, index) => (
                <li key={index} className="flex items-center">
                  {/* Trash icon moved to the left */}
                  <FaTrash
                    className="text-red-500 mr-4 cursor-pointer"
                    onClick={() => deleteQuestion(index)}
                  />
                  {/* Render the question form */}
                  {renderQuestionInput(question, index)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Dropdown for selecting question types */}
        <div className="mt-4 p-4 bg-gray-50 border rounded shadow-lg">
          <h3 className="font-semibold mb-2">Select a question type:</h3>
          <ul className="grid grid-cols-2 gap-2">
            {formOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelectOption(option)}
                className="cursor-pointer hover:bg-gray-200 p-2 border rounded"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Button to finalize the form */}
        {questions.length > 0 && (
          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Save Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPage;
