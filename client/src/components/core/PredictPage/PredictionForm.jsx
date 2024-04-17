import React, { useState } from "react";
import skillsData from "../../../assests/data/data.json";
import { IoCloseSharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../slices/authSlice";
import axios from "axios";

const PredictionForm = ({ setPredictionResult }) => {
  const predictionUrl = `${process.env.REACT_APP_PREDICTION_MODEL_BACKEND_URL}/predict`;
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

  const [skills, setSkills] = useState(skillsData.skills);
  console.log("Checking the skills of json", skills);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "Skills") {
      const alreadySelected = formData.Skills.includes(value);
      if (!alreadySelected) {
        setFormData((prev) => ({
          ...prev,
          Skills: [...prev.Skills, value],
        }));
        const { key } = event.target;
        console.log("key", key);
        setSkills((prev) => prev.filter((skill) => skill.name !== value));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const unselectSkillHandler = (index) => {
    setFormData((prev) => ({
      ...prev,
      Skills: prev.Skills.filter((_, i) => i !== index),
    }));
    setSkills((prev) => [...prev, { name: formData.Skills[index] }]);
  };
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [message, setMessage] = useState("");
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (
      !formData.Branch ||
      !formData.Gender ||
      !formData.tenth_percentage ||
      !formData.twelfth_percentage ||
      !formData.CGPA_Till_sixth ||
      !formData.sixth_Sem_SGPA ||
      !formData.Internship ||
      formData.Skills.length === 0
    ) {
      setMessage("Please fill all the fields");
      return;
    }
    dispatch(setLoading(true));
    try {
      const response = await axios.post(predictionUrl, formData, {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      });
      const data = response.data;
      const result = data.result;
      setPredictionResult(result);
      dispatch(setLoading(false));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" max-w-[650px] p-4 bg-white border shadow-md rounded-lg md:mt-12 mt-16  dark:bg-[#181A1B]">
      <h1 className="text-3xl font-bold text-center mb-4 dark:text-[#707F94]">
        Make Your Prediction
      </h1>
      {message && (
        <div className="text-red-500 border border-red-500 px-1 w-full mb-2 flex rounded-md sm:justify-center justify-start items-center">
          {message}
        </div>
      )}
      <form
        className="space-y-4 md:px-5 sm:px-3 px-2 dark:text-[#A2A19F]"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="grid md:grid-cols-2 grid-col-1 gap-4">
          <div className="space-y-2">
            <label htmlFor="CGPA_Till_sixth" className="text-sm block">
              CGPA Till Sixth Semester
            </label>
            <input
              type="number"
              id="CGPA_Till_sixth"
              name="CGPA_Till_sixth"
              className="border border-gray-300 rounded-md p-2 w-full dark:bg-[#3B3B3B] dark:text-[#78746C]" 
              onChange={changeHandler}
              value={formData.CGPA_Till_sixth}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sixth_Sem_SGPA" className="text-sm block">
              SGPA in 6th Semester
            </label>
            <input
              type="number"
              id="sixth_Sem_SGPA"
              name="sixth_Sem_SGPA"
              className="border border-gray-300 rounded-md p-2 w-full dark:bg-[#3B3B3B] dark:text-[#78746C]"
              onChange={changeHandler}
              value={formData.sixth_Sem_SGPA}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="twelfth_percentage" className="text-sm block">
              Percentage in 12th Class
            </label>
            <input
              type="number"
              id="twelfth_percentage"
              name="twelfth_percentage"
              className="border border-gray-300 rounded-md p-2 w-full dark:bg-[#3B3B3B] dark:text-[#78746C]"
              onChange={changeHandler}
              value={formData.twelfth_percentage}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="tenth_percentage" className="text-sm block">
              Percentage in 10th Class
            </label>
            <input
              type="number"
              id="tenth_percentage"
              name="tenth_percentage"
              className="border border-gray-300 rounded-md p-2 w-full dark:bg-[#3B3B3B] dark:text-[#78746C]"
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
            <label htmlFor="Branch" className="text-sm block">
              Branch
            </label>
            <select
              id="Branch"
              name="Branch"
              className="border border-gray-300 rounded-md p-2 w-full dark:bg-[#3B3B3B] dark:text-[#78746C]"
              onChange={changeHandler}
              value={formData.Branch}
            >
              <option value="">Select Branch</option>
              <option value="Computer Science & Engineering">
                Computer Science and Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Bio Medical Engineering">
                Bio Medical Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Electronics & Communication Engineering">
                Electronics & Communication Engineering
              </option>
              <option value="Electronics & Instrumentation Engineering">
                Electronics & Instrumentation Engineering
              </option>
              <option value="Petro Chemical Engineering">
                Petro Chemical Engineering
              </option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="Skills" className="text-sm block">
            Skills
          </label>
          <select
            id="Skills"
            name="Skills"
            className="border border-gray-300 rounded-md p-2 w-full dark:bg-[#3B3B3B] dark:text-[#78746C]"
            onChange={changeHandler}
            value={formData.Skills}
          >
            <option value="">Select Skills</option>
            {skills.map((skill, index) => (
              <option key={index} value={skill.name}>
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full dark:bg-[#61a5ed]"
        >
          Predict
        </button>
      </form>
    </div>
  );
};
export default PredictionForm;
