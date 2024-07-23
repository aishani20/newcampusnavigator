import React, { useState } from "react";
import Breadcrumbs from "../../common/Breadcrumbs";
import axios from "axios";
import ShowPYQS from "./ShowPYQS";
import UploadPYQS from "./UploadPYQ";

const QuestionPaper = () => {
  const crumbs = [
    { text: "Home", link: "/" },
    { text: "Academics", link: "/academics" },
    { text: "PYQ", link: "/academics/pyq" },
  ];

  //filter
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };
  const handleBranchSelection = (branch) => {
    setSelectedBranch(branch);
  };

  const [filteredPapers, setFilteredPapers] = useState([]);

  //uploading the question papers form
  const [formData, setFormData] = useState({
    year: "",
    branch: "",
    pyqs: [],
  });
  const uploadFormChangeHandler = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileSubmit = async (event) => {
    event.preventDefault();
    setFilteredPapers(formData);

    const data = new FormData();
    for (let i = 0; i < formData.pyqs.length; i++) {
      formData.append("pyq", formData.pyqs[i]);
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/uploadpyq`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // new function to filter papers based on year and branch
  // const filterPapers = () => {
  // TO DO: implement logic to filter papers based on selected year and branch
  // for now, just return an empty array
  // return [];
  // };

  return (
    <div className="h-screen ">
      <div>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className="max-w-screen-lg mx-auto p-8 flex justify-between">
        {/*Display PYQS */}

        <div>
          <h1 className="text-3xl font-bold mb-4 dark:text-[#C5C4C2]">
            Previous Year Question Papers
          </h1>
          {/* Filters */}
          <div className="flex space-x-4 mb-6">
            <select
              value={selectedYear}
              onChange={(e) => handleYearSelection(e.target.value)}
              className="rounded-lg px-4 py-2 bg-blue-100 text-blue-700 focus:outline-none focus:bg-blue-200 hover:bg-blue-200 transition duration-300"
            >
              <option value="">Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
            <select
              value={selectedBranch}
              onChange={(e) => handleBranchSelection(e.target.value)}
              className="rounded-lg px-4 py-2 bg-blue-100 text-blue-700 focus:outline-none focus:bg-blue-200 
                        hover:bg-blue-200 transition duration-300"
            >
              <option value="">Select Branch</option>
              <option value="cse">CSE</option>
              <option value="mechanical">Mechanical</option>
              <option value="civil">Civil</option>
              <option value="ec">EC</option>
              <option value="ee">EE</option>
              <option value="ai">AI</option>
              <option value="iot">IoT</option>
            </select>
          </div>
          <hr />

          <ShowPYQS />
          {
            // <div className="w-full">
            //   <h2 className="text-2xl mb-4 dark:text-[#C5C4C2]">
            //     Available Papers for {selectedYear} - {selectedBranch}:
            //   </h2>
            //   <ul className="pl-0">
            //     {filteredPapers.map((paper, index) => (
            //       <li key={index}>
            //         <div className="flex justify-between">
            //           <span>{paper.name}</span>
            //           <button className="btn btn-primary">View</button>
            //         </div>
            //       </li>
            //     ))}
            //   </ul>
            // </div>
          }
        </div>

        {/*Upload PYQ*/}
        {
          //   <div className="flex gap-4">
          //   <div>
          //     <div className="border">
          //       <div className="text-xl mb-4 dark:text-[#C5C4C2]">
          //         Upload Files :
          //       </div>
          //       <form
          //         className="mb-6"
          //         onSubmit={handleFileSubmit}
          //         encType="multipart/form-data"
          //       >
          //         <div className="mb-4">
          //           <label
          //             htmlFor="branch"
          //             className="block text-gray-700 font-bold mb-2"
          //           >
          //             Branch:
          //           </label>
          //           <select
          //             id="branch"
          //             name="branch"
          //             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          //             onChange={(e) =>
          //               uploadFormChangeHandler(e.target.name, e.target.value)
          //             }
          //           >
          //             <option value="">Select Branch</option>
          //             <option value="cse">CSE</option>
          //             <option value="mechanical">Mechanical</option>
          //             <option value="civil">Civil</option>
          //             <option value="ec">EC</option>
          //             <option value="ee">EE</option>
          //             <option value="ai">AI</option>
          //             <option value="iot">IoT</option>
          //           </select>
          //         </div>
          //         <div className="mb-4">
          //           <label
          //             htmlFor="year"
          //             className="block text-gray-700 font-bold mb-2"
          //           >
          //             Year:
          //           </label>
          //           <select
          //             id="year"
          //             name="year"
          //             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          //             onChange={(e) => setSelectedYear(e.target.value)}
          //           >
          //             <option value="">Select Year</option>
          //             <option value="1">1st</option>
          //             <option value="2">2nd</option>
          //             <option value="3">3rd</option>
          //             <option value="4">4th</option>
          //           </select>
          //         </div>
          //         <div className="mb-4">
          //           <label
          //             htmlFor="uploadInput"
          //             className="btn-label bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer
          //                       dark:text-[#C5C4C2]"
          //           >
          //             Uploaded Files
          //           </label>
          //           <input
          //             type="file"
          //             id="uploadInput"
          //             name="pyq"
          //             multiple
          //             onChange={(e) => {
          //               uploadFormChangeHandler(e.target.name, e.target.files);
          //               formData &&
          //                 formData.pyqs.map((pyq) => console.log(pyq.name));
          //             }}
          //             accept=".pdf,.doc,.docx"
          //             className=""
          //           />
          //         </div>
          //         <button
          //           type="submit"
          //           className="bg-blue-500 text-white px-4 py-2 rounded-lg dark:text-[#C5C4C2] hover:bg-blue-700"
          //         >
          //           Upload
          //         </button>
          //       </form>
          //       {/* Uploaded Files List */}
          //       <div>
          //         <div className="text-xl dark:text-[#C5C4C2]">
          //           Uploaded Files:
          //         </div>
          //         <ul className="pl-0">
          //           {formData.pyqs
          //             ? formData.pyqs.map((pyq, index) => (
          //                 <li key={index}>{pyq.name}</li>
          //               ))
          //             : `Nothing To show`}
          //         </ul>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        }
        <div className="border p-4">
          <UploadPYQS />
        </div>
      </div>
    </div>
  );
};

export default QuestionPaper;
