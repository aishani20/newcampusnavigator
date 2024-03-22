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

      if(data.success === "true"){
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
    <div className="border w-[500px] mx-auto rounded-[32px] flex flex-col items-center">
      <div className="text-[32px] text-[#333333] my-[20px]">SIGNUP</div>
      <form className="flex flex-col gap-3 text-[16px] w-[80%]">
        <div className="flex justify-between">
          <label>
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="border h-[56px]"
            />
          </label>
          <label>
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className="border h-[56px]"
            />
          </label>
        </div>
        <label>
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="border h-[56px] w-full"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            className="border h-[56px] w-full"
            onChange={changeHandler}
            value={formData.password}
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            type="password"
            name="confirmPassword"
            className="border h-[56px] w-full"
            onChange={changeHandler}
            value={formData.confirmPassword}
          />
        </label>
        <div
          className="text-[20px] rounded-[32px] bg-[#aaaaaa] text-white text-center my-[24px] py-[21px] cursor-pointer"
          onClick={submitHandler}
        >
          Sign up
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
