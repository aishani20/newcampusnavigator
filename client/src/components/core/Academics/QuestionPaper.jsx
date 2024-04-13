import React, { useState } from 'react';

const QuestionPaper = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setUploadedFiles(files);
  };

  const handleFileSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle file submission, e.g., send files to server
    console.log('Files uploaded:', uploadedFiles);
  };

  return (
    <div className="max-w-800 mx-auto p-20">
      <h1 className="text-2xl font-bold mb-4">Previous Year Question Papers</h1>
      <h2 className="mb-2">Please select your Year:</h2>
      <div className="flex justify-center mb-4">
        <button
          className={`btn-year ${selectedYear === 'First Year' ? 'active' : ''}`}
          onClick={() => handleYearSelection('First Year')}
        >
          First Year
        </button>
        <button
          className={`btn-year ${selectedYear === 'Second Year' ? 'active' : ''}`}
          onClick={() => handleYearSelection('Second Year')}
        >
          Second Year
        </button>
        <button
          className={`btn-year ${selectedYear === 'Third Year' ? 'active' : ''}`}
          onClick={() => handleYearSelection('Third Year')}
        >
          Third Year
        </button>
        <button
          className={`btn-year ${selectedYear === 'Fourth Year' ? 'active' : ''}`}
          onClick={() => handleYearSelection('Fourth Year')}
        >
          Fourth Year
        </button>
      </div>
      <h2>Upload Files for {selectedYear}:</h2>
      <form className="mb-4" onSubmit={handleFileSubmit}>
        <div className="mb-2">
          <label htmlFor="uploadInput" className="btn-label">
            Choose Files
          </label>
          <input
            type="file"
            id="uploadInput"
            multiple
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
        </div>
        <button type="submit" className="btn-submit">
          Upload
        </button>
      </form>
      <h2>Uploaded Files:</h2>
      <ul className="list-none pl-0">
        {uploadedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPaper;

