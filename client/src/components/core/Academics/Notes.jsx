import React, { useState } from 'react';
import Breadcrumbs from '../../common/Breadcrumbs';

const QuestionPaper = () => {
    const crumbs = [
      { text: 'Home', link: '/' },
      { text: 'Academics', link: '/academics' },
      { text: 'Notes', link: '/academics/notes' },
    ];
  
  
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
    <div className="h-screen">
    <div>
      <Breadcrumbs crumbs={crumbs} />
    </div>
    <div className="max-w-screen-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-[#C5C4C2]">Previous Year Question Papers</h1>
      <h2 className="text-xl mb-4 dark:text-[#C5C4C2]">Please select your Year:</h2>
      <div className="flex space-x-4 mb-6">
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedYear === 'First Year' ? 'bg-blue-700' : ''}`}
          onClick={() => handleYearSelection('First Year')}
        >
          First Year
        </button>
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedYear === 'Second Year' ? 'bg-blue-700' : ''}`}
          onClick={() => handleYearSelection('Second Year')}
        >
          Second Year
        </button>
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedYear === 'Third Year' ? 'bg-blue-700' : ''}`}
          onClick={() => handleYearSelection('Third Year')}
        >
          Third Year
        </button>
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedYear === 'Fourth Year' ? 'bg-blue-700' : ''}`}
          onClick={() => handleYearSelection('Fourth Year')}
        >
          Fourth Year
        </button>
      </div>
      <h2 className="text-xl mb-4 dark:text-[#C5C4C2]">Upload Files for {selectedYear}:</h2>
      <form className="mb-6" onSubmit={handleFileSubmit}>
        <div className="mb-4">
          <label htmlFor="uploadInput" className="btn-label bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
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
          Upload
        
      </form>
      <h2 className="text-xl dark:text-[#C5C4C2]">Uploaded Files:</h2>
      <ul className="pl-0">
        {uploadedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default QuestionPaper;
