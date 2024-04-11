import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import Logo from "../../assests/LogoImage.png";
// import CurvedLine from "../../assests/curveUnderline.svg";
import CompleteLogo from "../../assests/completeLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { VscBell } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";

import { setToken } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

import { toast } from "react-hot-toast";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  function menuToggleHandler() {
    setShowMenu(!showMenu);
  }
  function classChangeHandler() {
    setShow(!show);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function signoutHanlder() {
    let newToken = document.cookie;
    document.cookie = `token=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log("checking cookie deletion", newToken);
    dispatch(setToken(token, null));
    navigate("/login");
    toast.success("Logged out successfully");
    window.location.reload();
  }
  return (
    <div
      className={`border-b-2 pt-8 pb-4 grid md:grid-cols-3 grid-cols-3 items-center relative ${
        token === null ? "md:grid-cols-4 " : ""
      }`}
    >
      <Link to="/">
        <div className="relative flex items-center max-w-80">
          <img src={CompleteLogo} alt="Logo" className="" />
        </div>
      </Link>

      {token !== null && (
        <div
          className={`md:flex gap-2  md:flex-row md:gap-4 text-lg justify-center ${
            showMenu === true
              ? "flex flex-col items-center absolute justify-center col-start-3 col-end-4 z-30 top-20"
              : "hidden"
          }`}
        >
          <Link
            to="/blogs"
            onClick={() => setShowMenu(false)}
            className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${
              location.pathname === "/blogs" &&
              "underline underline-offset-8 decoration-4 decoration-blue-500"
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/insights"
            onClick={() => setShowMenu(false)}
            className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${
              location.pathname === "/insights" &&
              "underline underline-offset-8 decoration-4 decoration-blue-500"
            }`}
          >
            Insights
          </Link>
          <Link
            to="/academics"
            onClick={() => setShowMenu(false)}
            className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${
              location.pathname === "/academics" &&
              "underline underline-offset-8 decoration-4 decoration-blue-500"
            }`}
          >
            Academics
          </Link>
        </div>
      )}

      <div className="flex justify-end items-center gap-6">
        <Link
          to="/predict"
          onClick={() => setShowMenu(false)}
          className={`text-[#3652DD] border-2 border-[#3652DD] text-[16px] px-[13px] py-[15px] rounded-[4px] sm:block ${
            showMenu === true ? "" : "hidden"
          }`}
        >
          Check Your Success
        </Link>
        {token !== null && (
          <div className="flex gap-3">
            <VscBell
              className={`w-6 h-6 cursor-pointer sm:block ${
                showMenu === true ? "" : ""
              }`}
            />
            <VscAccount
              className={`w-6 h-6 cursor-pointer sm:block ${
                showMenu ? "col-start-3 col-end-4" : "hidden"
              }`}
              onClick={() => {
                setShowMenu(false);
                classChangeHandler();
              }}
            />
            {show && (
              <div className={`flex flex-col border p-2 rounded shadow-sm`}>
                <span>Profile</span>
                <span>Setting</span>
                <span
                  className={`flex items-center gap-1 cursor-pointer`}
                  onClick={signoutHanlder}
                >
                  <p>Signout</p>
                  <VscSignOut />
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      {token === null && (
        <Link
          to={location.pathname === "/login" ? "/signup" : "/login"}
          className="flex justify-end cols-start-4 cols-end-5"
        >
          <div
            className={`text-[18px] bg-[#3652DD] px-[30px] py-[17px] text-white rounded-[4px] sm:block ${
              showMenu === true ? "" : "hidden"
            } `}
          >
            {location.pathname === "/login" ? "SIGNUP" : "LOGIN"}
          </div>
        </Link>
      )}
      <div className="flex md:hidden justify-center relative">
        <GiHamburgerMenu
          onClick={menuToggleHandler}
          className="cursor-pointer  z-40"
        />
        {showMenu === true && (
          <div className="absolute top-0 left-0 bg-white border border-3 h-screen w-screen flex justify-center items-center z-20"></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
