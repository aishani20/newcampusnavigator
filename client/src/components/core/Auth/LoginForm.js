import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../../slices/authSlice";

const LoginForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    try {
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        navigate("/");
        console.log("If data.success then navigate to home page");
      }

      if (data.token) {
        toast.success("Login Successful");
        dispatch(setToken(data.token));
        navigate("/");
        console.log("If token then navigate to home page");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="border w-full mx-auto rounded-lg flex flex-col items-center p-6 bg-white shadow-md">
      <div className="text-3xl text-gray-700 font-semibold mb-6">LOGIN</div>
      <form className="flex flex-col gap-4 w-full">
        <label className="flex flex-col w-80">
          <p className="text-gray-700 mb-1">Email Address</p>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <p className="text-gray-700">Password</p>
          <input
            type="password"
            name="password"
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
            onChange={changeHandler}
            value={formData.password}
          />
        </label>
        <Link to="/forgot-password" className="self-end text-[12px] cursor-pointer">Forgot Password?</Link>
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
