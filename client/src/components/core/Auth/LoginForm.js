import React, { useState } from "react";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
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
  async function submitHandler(event){
    event.preventDefault();
    try{
        const response = await fetch(`${backendUrl}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials: 'include',
            body:JSON.stringify(formData)
        })
        const data = await response.json();
        console.log(data);
        
        
        if(data.success){
            

            navigate("/home");
            console.log("If data.success then navigate to home page");
        }
        
        if(data.token){
          toast.success("Login Successful");
          dispatch(setToken(data.token));
          navigate("/home");
          console.log("If token then navigate to home page");
        }

        
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="border   w-[500px] mx-auto rounded-[32px] flex flex-col items-center">
      <div className="text-[32px] text-[#333333] my-[20px]">LOGIN</div>
      <form className="flex flex-col gap-3 text-[16px] w-[80%]">
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
        <div className="text-[20px] rounded-[32px] bg-[#aaaaaa] text-white text-center my-[24px] py-[21px]" onClick={submitHandler}>
          Log in
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
