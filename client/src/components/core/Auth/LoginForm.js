import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../../slices/authSlice";
import { setLoading } from "../../../slices/authSlice";

import axios from "axios";

const LoginForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(formData);
    console.log(backendUrl);
  }
  async function submitHandler(event) {
    event.preventDefault();

    // Check if email and password are provided
    if (!formData.email || !formData.password) {
      setMessage("Please fill all the fields");
      return;
    }

    try {
      // Send login request to the backend
      const response = await axios.post(`${backendUrl}/login`, formData, {
        withCredentials: true,
      });

      const data = response.data;
      console.log(data);

      // Handle response from the server
      if (!data.success) {
        setMessage(data.message); // Display error message from the server
        return;
      }

      localStorage.setItem("token", JSON.stringify(data.token));
      // Login successful
      dispatch(setLoading(true)); // Set loading state
      navigate("/"); // Navigate to home page
      if (data.token) {
        toast.success("Login Successful"); // Show success toast
        dispatch(setToken(data.token)); // Set user token in Redux store
      }
    } catch (err) {
      console.log(err); // Log any errors
    }
  }

  return (
    <div className="m-20 border w-full mx-auto rounded-lg flex flex-col items-center p-6 bg-white shadow-md px-8 sm:px-6 dark:bg-[#17191A]">
      <div className="text-3xl text-gray-700 font-semibold mb-6 dark:text-[#DED7CD]">LOGIN</div>
      {message && (
        <div className="text-red-500 border border-red-500 px-1 w-full mb-2 flex rounded-md sm:justify-center justify-start items-center">
          {message}
        </div>
      )}
      <form className="flex flex-col gap-4 w-full">
        <label className="flex flex-col md:w-80 ">
          <p className="text-gray-700 mb-1 dark:text-[#F2EEE5]">Email Address</p>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500 dark:bg-[#3B3B3B] dark:border-[#3B3B3B] dark:text-white"
          />
        </label>
        <label className="flex flex-col ">
          <p className="text-gray-700 dark:text-[#F2EEE5]">Password</p>
          <input
            type="password"
            name="password"
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500 dark:bg-[#3B3B3B] dark:border-[#3B3B3B] dark:text-white"
            onChange={changeHandler}
            value={formData.password}
          />
        </label>
        <Link
          to="/forgot-password"
          className="self-end text-[12px] cursor-pointer dark:text-[#FFFFFF]"
        >
          Forgot Password?
        </Link>
        <div
          className="bg-[#3652DD] text-white rounded-lg py-3 text-lg hover:bg-[#2f48c6] transition-colors duration-300 text-center cursor-pointer"
          onClick={submitHandler}
        >
          Log in
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
