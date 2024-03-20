import React, { useState } from "react";
import Logo from "../../../assests/LogoImage.png";
import CurvedLine from "../../../assests/curveUnderline.svg";
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
    <div className="flex justify-between max-w-[1292px] mx-auto my-[42px] items-center">
      <Link to="/">
        <div className="relative montserrat h-[47.7px]">
          <div className="flex item-center h-[47.7px] absolute gap-[2px]">
            <img src={Logo} alt="Logo" width="43px" />
            <div className="text-[34.62px] font-bold">
              Campus<span className="text-[#3652DD]">Navigator</span>
            </div>
          </div>
          <div className="absolute top-[27px] w-[363px]">
            <img src={CurvedLine} alt="CurvedLine" />
          </div>
        </div>
      </Link>
      {token !== null && (
        <div className="flex items-center gap-4 relative">
          <VscBell className="w-6 h-6" />
          <VscAccount
            className="w-6 h-6 cursor-pointer"
            onClick={classChangeHandler}
          />
          <div
            className={`border p-2 rounded absolute top-7 shadow-sm right-0 ${
              show === false ? "hidden" : ""
            }`}
          >
            <p>Profile</p>
            <p>Setting</p>
            <p className={`flex items-center gap-1`}>
              <p>Signout</p>
              <VscSignOut />
            </p>
          </div>
        </div>
      )}
      {token === null && (
        <div className="flex w-[440px] justify-between items-center">
          <Link
            to="/predict"
            className="text-[#3652DD] border-2 border-[#3652DD] text-[18px] px-[15px] py-[17px] rounded-[4px]"
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
