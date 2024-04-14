import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../slices/authSlice";

import { SlClose } from "react-icons/sl";
const InsightsForm = ({ setShowModal, setIsNewInsight }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    appliedRole: "",
    appliedCompany: "",
    rounds: "",
    package: "",
    interviewQuestions: "",
    interviewProcess: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("Handle change", formData);
  };
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await axios.post(`${backendUrl}/createInsight`, formData, {
        headers: {
          Authorisation: `Bearer ${token}`,
        }
      });

      const data = response.data;

      if (data.success) {
        setIsNewInsight(true);
        toast.success("Insight created successfully");
        setFormData({
          appliedRole: "",
          appliedCompany: "",
          rounds: "",
          package: "",
          interviewQuestions: "",
          interviewProcess: "",
        });
      }
    } catch (error) {
      console.error("Error creating insight:", error);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
      setShowModal(false);
      navigate("/insights");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Create an Insight</h2>
          <SlClose
            className="cursor-pointer transition-transform duration-300 transform hover:rotate-90 text-gray-500"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Applied Role:
            <input
              className="border rounded p-2 w-full"
              type="text"
              name="appliedRole"
              value={formData.appliedRole}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Applied Company:
            <input
              className="border rounded p-2 w-full"
              type="text"
              name="appliedCompany"
              value={formData.appliedCompany}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rounds:
            <input
              className="border rounded p-2 w-full"
              type="number"
              name="rounds"
              value={formData.rounds}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Package:
            <input
              className="border rounded p-2 w-full"
              type="number"
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Interview Questions:
            <input
              className="border rounded p-2 w-full"
              type="text"
              name="interviewQuestions"
              value={formData.interviewQuestions}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Interview Process:
            <input
              className="border rounded p-2 w-full"
              type="text"
              name="interviewProcess"
              value={formData.interviewProcess}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsightsForm;
