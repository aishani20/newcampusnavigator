import React, { useState } from "react";

const UploadPYQS = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("year", year);
    formData.append("branch", branch);
    formData.append("file", file);

    onUpload(formData);

    setFile(null);
    setYear("");
    setBranch("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="text-xl font-bold mb-3">Upload Question Papers:</div>
      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 font-bold mb-2">
          Year
        </label>
        <select
          id="year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">--Select Year--</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="branch" className="block text-gray-700 font-bold mb-2">
          Branch
        </label>
        <select
          id="branch"
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">--Select Branch--</option>
          <option value="cse">CSE</option>
          <option value="mechanical">Mechanical</option>
          <option value="civil">Civil</option>
          <option value="ec">EC</option>
          <option value="ee">EE</option>
          <option value="ai">AI</option>
          <option value="iot">IoT</option>
        </select>
      </div>
      <div className="mb-4">
        <label>
            
          <input
            type="file"
            id="file"
            multiple
            accept=".pdf"
            onChange={handleFileChange}
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadPYQS;
