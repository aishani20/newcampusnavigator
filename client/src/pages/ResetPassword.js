import React, { useState } from "react";
import Toast from "react-hot-toast";
const ResetPassword = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [email, setEmail] = useState("");
  const changeHandler = (event) => {
    const { value } = event.target;
    setEmail(value);
    console.log(email);
  };
  const submitHandler = async (event) => {
    console.log(email);

    try {
      event.preventDefault();
      const response = await fetch(`${backendUrl}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
      const data = await response.json();
      console.log(data);
      Toast.success("Reset password link has been sent to your email");
    } catch (error) {
      console.error(error);
      console.log("Error in sending reset password link");
    }
  };
  return (
    <div className="border max-w-md mx-auto rounded-lg flex flex-col items-center p-6">
      <div className="text-2xl text-gray-700 my-6">Forgot Password?</div>
      <div className="text-gray-700 mb-4">
        Please enter your registered email address. We will email you a link to
        reset your password
      </div>
      <form className="w-full">
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Enter your registered email"
            className="border h-12 px-4 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-[#3652DD] text-white rounded-lg py-3 text-lg hover:bg-[#2f48c6] transition-colors duration-300 w-full"
          onClick={submitHandler}
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
