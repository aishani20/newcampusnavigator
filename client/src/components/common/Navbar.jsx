import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import CompleteLogo from "../../assests/completeLogo.png";
import DarkModeLogo from "../../assests/darkModeLogo.png";
import predictionImage from "../../assests/prediction.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { VscBell, VscAccount, VscSignOut } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { darkMode } = useSelector((state) => state.darkMode);
  const [showMenu, setShowMenu] = useState(false);
  const [userOptions, setUserOptions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (
      !event.target.closest(".bell-menu") &&
      !event.target.closest(".account-menu")
    ) {
      setShowNotifications(false);
      setUserOptions(false);
    }
  }

  function menuToggleHandler() {
    setShowMenu(!showMenu);
  }

  function signoutHandler() {
    localStorage.removeItem("token"); // Remove token from localStorage
    dispatch(setToken(null)); // Clear token in Redux

    localStorage.removeItem("user"); // Remove token from localStorage
    dispatch(setUser(null)); // Clear token in Redux

    navigate("/login"); // Redirect to login page
    toast.success("Logged out successfully"); // Show logout success message
    setShowMenu(false);
    setShowNotifications(false);
  }

  return (
    <div
      className={`border-b-2  pb-4 grid grid-cols-12 items-center relative dark:border-[#51585B] ${
        token === null ? "md:grid-cols-4 " : ""
      }`}
    >
      <Link
        to="/"
        className={`col-start-1 col-end-7 ${
          token === null
            ? "lg:col-end-4 md:col-end-5 sm:col-end-6 "
            : "sm:col-end-6 md:col-end-5 lg:col-end-4"
        }`}
      >
        <div className="relative flex items-center max-w-80">
          <img
            src={!darkMode ? CompleteLogo : DarkModeLogo}
            alt="Logo"
            className=""
          />
        </div>
      </Link>

      {token !== null && (
        <div
          className={`sm:flex gap-2 sm:flex-row md:gap-4 text-lg justify-center sm:col-start-7 sm:col-end-10 md:col-start-5 lg:col-end-9 md:col-end-10 ${
            showMenu === true
              ? "flex flex-col absolute sm:static col-start-12 col-end-13 z-30 top-[12rem] right-40"
              : "hidden"
          }`}
        >
          <Link
            to="/blogs"
            onClick={() => setShowMenu(false)}
            className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 dark:text-[#B2AE9F] ${
              location.pathname === "/blogs" &&
              "underline underline-offset-8 decoration-4 decoration-blue-500"
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/insights"
            onClick={() => setShowMenu(false)}
            className={`transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 dark:text-[#B2AE9F] ${
              location.pathname === "/insights" &&
              "underline underline-offset-8 decoration-4 decoration-blue-500"
            }`}
          >
            Insights
          </Link>
          <Link
            to="/academics"
            onClick={() => setShowMenu(false)}
            className={`transition duration-300 ease-in-out transform hover:scale-105 dark:text-[#B2AE9F] hover:text-blue-500 ${
              location.pathname === "/academics" &&
              "underline underline-offset-8 decoration-4 decoration-blue-500"
            }`}
          >
            Academics
          </Link>
        </div>
      )}

      <div
        className={`text-[#3652DD] md:flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 ${
          token === null
            ? "lg:col-start-9 md:col-start-10 col-end-12"
            : "lg:col-start-9 md:col-start-10 col-end-12"
        } ${
          showMenu === true
            ? "block sm:block absolute md:static sm:right-[-2.5rem] -right-5 top-80 sm:top-40 z-30"
            : "md:flex hidden"
        }`}
      >
        <Link
          to="/predict"
          onClick={() => setShowMenu(false)}
          className="flex items-center justify-center text-lg px-4 py-2 font-semibold border-2 border-[#3652DD] rounded-md"
        >
          <img src={predictionImage} alt="Logo" className="w-7 h-7 mr-2" />
          <span
            className={`lg:block md:hidden ${showMenu === true ? "block" : ""}`}
          >
            Check Your Success
          </span>
        </Link>
      </div>

      {token !== null && (
        <div className="flex gap-3 relative justify-end items-center sm:col-start-11 sm:col-end-12 md:col-start-12 md:col-end-13 col-start-11 col-end-12">
          <VscBell
            className={`w-6 h-6 cursor-pointer sm:block dark:text-[#A2A19F] ${
              showMenu ? "" : ""
            }`}
            onClick={() => setShowNotifications(!showNotifications)}
          />
          <VscAccount
            className={`w-6 h-6 cursor-pointer md:block dark:text-[#A2A19F] ${
              showMenu ? "hidden" : "hidden"
            }`}
            onClick={() => setUserOptions(!userOptions)}
          />
          {userOptions && (
            <div
              className={`flex flex-col border p-2 rounded shadow-sm absolute top-8 right-3 bg-white z-20 gap-1 text-sm account-menu dark:bg-[#17191A] dark:text-[#FFFFFF]`}
            >
              <span>Profile</span>
              <Link to="/settings"><span>Setting</span></Link>
              <span
                className={`flex items-center gap-1 cursor-pointer`}
                onClick={signoutHandler}
              >
                <p>Signout</p>
                <VscSignOut />
              </span>
            </div>
          )}
        </div>
      )}

      {token === null && (
        <Link
          to={location.pathname === "/login" ? "/signup" : "/login"}
          className="flex justify-end col-start-12 col-end-13 md:ml-12"
        >
          <div
            className={`text-[18px] bg-[#3652DD] px-[30px] py-[10px] text-white rounded-[4px] sm:block`}
          >
            {location.pathname === "/login" ? "SIGNUP" : "LOGIN"}
          </div>
        </Link>
      )}

      {token !== null && (
        <div
          className={`flex md:hidden col-start-12 col-end-13 ${
            showMenu === true ? "justify-center " : "justify-end"
          } relative`}
        >
          <div onClick={menuToggleHandler}>
            {showMenu === false ? (
              <GiHamburgerMenu
                className={`cursor-pointer w-7 h-7 dark:text-[#A2A19F] ${
                  showMenu && "bg-gray-400 p-1"
                } z-40`}
              />
            ) : (
              <AiOutlineClose
                className={`cursor-pointer w-8 h-8 ${
                  showMenu && "bg-gray-400 p-1"
                } z-40`}
              />
            )}
          </div>

          {showMenu === true && (
            <div className="absolute sm:top-10 top-[45px] right-0 bg-white border border-3 w-64 min-h-screen gap-2 z-20  ">
              <div className="flex items-center gap-3 p-5 ">
                <VscAccount className="w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-blue-700">@abtyagi15</span>
                  <span>Abhishek Tyagi</span>
                </div>
              </div>
              <hr className="w-full border" />
              <div className="relative sm:top-20 top-60 p-2">
                <hr className="w-full my-2" />
                <Link to="/settings" onClick={()=> setShowMenu(false)}>Settings</Link>
                <div onClick={signoutHandler}>Signout</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Notification container */}
      {showNotifications && (
        <div className="absolute right-10 top-[45px] bg-white shadow-md rounded-md p-2 bell-menu z-20 border dark:bg-[#17191A]">
          <div className="mb-2 dark:text-white text-sm">No Notification </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
