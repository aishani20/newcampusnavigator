import React, { useState } from "react";
// import Logo from "../../assests/LogoImage.png";
// import CurvedLine from "../../assests/curveUnderline.svg";
import CompleteLogo from "../../assests/completeLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { VscBell } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const [show, setShow] = useState(false);
  function classChangeHandler() {
    setShow(!show);
  }
  return (
    <div className="border-b-2 pt-8 pb-4 flex justify-between items-center">
      <Link to="/">
        <div className="relative flex items-center max-w-80">
          <img src={CompleteLogo} alt="Logo" className="" />
        </div>
      </Link>

      {token !== null && (
        <>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 text-lg">
            <Link
              to="/blogs"
              className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${
                location.pathname === "/blogs" &&
                "underline underline-offset-8 decoration-4 decoration-blue-500"
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/insights"
              className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${
                location.pathname === "/insights" &&
                "underline underline-offset-8 decoration-4 decoration-blue-500"
              }`}
            >
              Insights
            </Link>
            <Link
              to="/academics"
              className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${
                location.pathname === "/academics" &&
                "underline underline-offset-8 decoration-4 decoration-blue-500"
              }`}
            >
              Academics
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/predict"
              className="text-[#3652DD] border-2 border-[#3652DD] text-[16px] px-[13px] py-[15px] rounded-[4px]"
            >
              Check Your Success
            </Link>
            <div className="flex gap-3">
              <VscBell className="w-6 h-6" />
              <VscAccount
                className="w-6 h-6 cursor-pointer"
                onClick={classChangeHandler}
              />
              {
                <div className={`border p-2 rounded shadow-sm hidden`}>
                  <span>Profile</span>
                  <span>Setting</span>
                  <span className={`flex items-center gap-1`}>
                    <p>Signout</p>
                    <VscSignOut />
                  </span>
                </div>
              }
            </div>
          </div>
        </>
      )}

      {token === null && (
        <div className="flex w-[440px] justify-between items-center">
          <Link
            to="/predict"
            className="text-[#3652DD] border-2 border-[#3652DD] text-[16px] px-[13px] py-[15px] rounded-[4px]"
          >
            Check Your Success
          </Link>
          <Link to={location.pathname === "/login" ? "/signup" : "/login"}>
            <div className="text-[18px] bg-[#3652DD] px-[30px] py-[17px] text-white rounded-[4px] ">
              {location.pathname === "/login" ? "SIGNUP" : "LOGIN"}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
