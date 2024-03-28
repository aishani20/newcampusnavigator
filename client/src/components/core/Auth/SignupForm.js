import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast"
import { setSignupData } from "../../../slices/authSlice";

const SignupForm = () => {
  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api/v1";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    console.log("signupData", formData);
  }, [formData]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async (event) => {
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        toast.error("Please fill all the fields");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords Do Not Match")
        return;
      }
      dispatch(setSignupData(formData));
      event.preventDefault();
      const response = await fetch(`${backendUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if(data.success === true){
        toast.success("OTP has been sent to your email id");
        navigate("/verify-email");
      }
      else{
        console.log("Checking this statement");
        toast.error("Account already exists with this email id");
        return; 
      }
      
    } catch (err) {
      console.error(err);
      console.log("Error in signup submit handler");
    }
  };
  return (
    <div className="border w-full mx-auto rounded-lg flex flex-col items-center p-6 bg-white shadow-md">
      <div className="text-3xl text-gray-700 font-semibold mb-6">SIGNUP</div>
      <form className="flex flex-col gap-3 text-[16px] w-full">
        <div className="flex gap-2">
          <label className="flex flex-col">
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <label className="flex flex-col">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <p>Password</p>
          <input
            type="password"
            name="password"
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
            onChange={changeHandler}
            value={formData.password}
          />
        </label>
        <label className="flex flex-col">
          <p>Confirm Password</p>
          <input
            type="password"
            name="confirmPassword"
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
            onChange={changeHandler}
            value={formData.confirmPassword}
          />
        </label>
        <div
          className="bg-[#3652DD] text-white rounded-lg py-3 text-lg hover:bg-[#2f48c6] transition-colors duration-300 text-center cursor-pointer"
          onClick={submitHandler}
        >
          Sign up
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
