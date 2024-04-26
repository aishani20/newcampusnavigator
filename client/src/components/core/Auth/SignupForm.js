import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setSignupData, setLoading } from "../../../slices/authSlice";

const SignupForm = () => {
  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api/v1";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userRole: "major",
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
  const [message, setMessage] = useState(null);
  const { loading } = useSelector((state) => state.auth);
  const submitHandler = async (event) => {
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setMessage("Please fill all the fields");
        return;
      }
      if (
        formData.email.indexOf("@") === -1 ||
        formData.email.indexOf(".") === -1
      ) {
        setMessage("Invalid Email Address");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }

      event.preventDefault();
      dispatch(setLoading(true));
      const response = await fetch(`${backendUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        dispatch(setLoading(true));
        navigate("/verify-email");
        toast.success("OTP has been sent to your email id");
      } else {
        dispatch(setLoading(false));
        setMessage(data.message);
        return;
      }
      dispatch(setSignupData(formData));
    } catch (err) {
      console.error(err);
      console.log("Error in signup submit handler");
    }
  };
  return (
    <div className="border w-full rounded-lg flex flex-col items-center p-6 bg-white shadow-md">
      <div className="text-3xl text-gray-700 font-semibold mb-6">SIGNUP</div>
      {message && (
        <div className="text-red-500 border border-red-500 px-1 w-full mb-2 flex rounded-md sm:justify-center justify-start items-center">
          {message}
        </div>
      )}
      <form className="flex flex-col gap-3 text-lg w-full">
        <div className="flex sm:gap-4 gap-3 sm:flex-row flex-col">
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
          className="bg-[#3652DD]  text-white rounded-lg py-3 text-lg hover:bg-[#2f48c6] transition-colors duration-300 
                    text-center cursor-pointer flex items-center justify-center"
          onClick={submitHandler}
        >
          {loading && (<svg
            class="animate-spin border-2 border-t-white  rounded-full h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>)}
          Sign up
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
