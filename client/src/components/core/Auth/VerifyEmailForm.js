import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const VerifyEmailForm = () => {
  const { signupData } = useSelector((state) => state.auth);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate(); // for navigation

  const [otp, setOtp] = useState("");

  console.log("signup data in store", signupData);

  function changeHandler(event) {
    const { value } = event.target;
    setOtp((prev) => {
      return {
        ...prev,
        otp: value,
      };
    });
    console.log(signupData);
    console.log(otp);
    // console.log(backendUrl);
  }
  async function submitHandler(event) {
    event.preventDefault();
    try {
      const updatedSignupData = {
        ...signupData,
        otp: otp.otp,
      };
      const response = await fetch(`${backendUrl}/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSignupData),
      });
      const data = await response.json();
      if (data.success) {
        navigate("/home");
      } else {
        alert("Invalid OTP. Please try again.");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="border w-[500px] mx-auto rounded-[32px] flex flex-col items-center">
      <div className="text-[32px] text-[#333333] my-[20px]">Verify Email</div>
      <form className="flex flex-col gap-3 text-[16px] w-[80%] my-7">
        <label>
          <p>A verification code has been sent to you. Enter the code below</p>
          <input
            type="text"
            name="otp"
            onChange={changeHandler}
            value={otp.otp}
            className="border h-[46px] w-full my-2"
          />
        </label>
        <div
          className="text-[20px] rounded-[32px] bg-[#aaaaaa] text-white text-center my-[24px] py-[21px]"
          onClick={submitHandler}
        >
          Verify Email
        </div>
      </form>
    </div>
  );
};

export default VerifyEmailForm;
