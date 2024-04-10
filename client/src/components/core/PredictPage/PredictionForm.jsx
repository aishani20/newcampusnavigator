import React, { useState } from "react";
import skillsData from "../../../assests/data/data.json";
import { IoCloseSharp } from "react-icons/io5";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    Branch: "",
    Gender: "",
    tenth_percentage: "",
    twelfth_percentage: "",
    CGPA_Till_sixth: "",
    sixth_Sem_SGPA: "",
    Internship: "",
    Skills: [],
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "Skills" ? [...prev.Skills, value] : value,
    }));
  };

  const unselectSkillHandler = (index) => {
    setFormData((prev) => ({
      ...prev,
      Skills: prev.Skills.filter((_, i) => i !== index),
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(process.env.REACT_APP_PREDICTION_MODEL_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="mx-auto max-w-[650px] p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Make Your Prediction</h1>
      <form className="space-y-4" onSubmit={submitHandler}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="CGPA_Till_sixth" className="text-sm block">CGPA Till Sixth Semester</label>
            <input
              type="number"
              id="CGPA_Till_sixth"
              name="CGPA_Till_sixth"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={changeHandler}
              value={formData.CGPA_Till_sixth}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sixth_Sem_SGPA" className="text-sm block">SGPA in 6th Semester</label>
            <input
              type="number"
              id="sixth_Sem_SGPA"
              name="sixth_Sem_SGPA"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={changeHandler}
              value={formData.sixth_Sem_SGPA}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="twelfth_percentage" className="text-sm block">Percentage in 12th Class</label>
            <input
              type="number"
              id="twelfth_percentage"
              name="twelfth_percentage"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={changeHandler}
              value={formData.twelfth_percentage}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="tenth_percentage" className="text-sm block">Percentage in 10th Class</label>
            <input
              type="number"
              id="tenth_percentage"
              name="tenth_percentage"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={changeHandler}
              value={formData.tenth_percentage}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm block">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="Gender"
                  value="Male"
                  onChange={changeHandler}
                  checked={formData.Gender === "Male"}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="Gender"
                  value="Female"
                  onChange={changeHandler}
                  checked={formData.Gender === "Female"}
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm block">Internship</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="Internship"
                  value="Yes"
                  onChange={changeHandler}
                  checked={formData.Internship === "Yes"}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="Internship"
                  value="No"
                  onChange={changeHandler}
                  checked={formData.Internship === "No"}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
           <div className="space-y-2">
            <label htmlFor="Branch" className="text-sm block">Branch</label>
            <select
              id="Branch"
              name="Branch"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={changeHandler}
              value={formData.Branch}
            >
              <option value="">Select Branch</option>
              <option value="Computer Science & Engineering">Computer Science and Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Bio Medical Engineering">Bio Medical Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
              <option value="Electronics & Instrumentation Engineering">Electronics & Instrumentation Engineering</option>
              <option value="Petro Chemical Engineering">Petro Chemical Engineering</option>  
            </select>
          </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="Skills" className="text-sm block">Skills</label>
            <select
              id="Skills"
              name="Skills"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={changeHandler}
              value={formData.Skills}
            >
              <option value="">Select Skills</option>
              {skillsData.skills.map((skill) => (
                <option key={skill.id} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap mt-2">
              {formData.Skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2 cursor-pointer"
                  onClick={() => unselectSkillHandler(index)}
                >
                  <span className="mr-1">{skill}</span>
                  <IoCloseSharp />
                </div>
              ))}
            </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
        >
          Predict
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;
