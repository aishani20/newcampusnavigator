import React, { useEffect } from "react";
import { MdModeNight, MdOutlineLightMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../slices/darkModeSlice";

// Utility function to toggle dark mode class on root element
const toggleDarkModeClass = (enable) => {
  const rootElement = document.documentElement;
  if (rootElement) {
    if (enable) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }
};

const TopHeader = () => {
  // Select dark mode state from Redux store
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  // Effect to toggle dark mode class on mount and update
  useEffect(() => {
    toggleDarkModeClass(darkMode);
    return () => {
      toggleDarkModeClass(false); // Cleanup function
    };
  }, [darkMode]);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    const newDarkModeState = !darkMode;
    dispatch(setDarkMode(newDarkModeState));
    localStorage.setItem("darkMode", newDarkModeState);
  };
  return (
    <div className="mx-auto px-4 lg:px-6 xl:px-8 max-w-screen-xl w-full flex justify-end items-center">
      <div className="border-x border-gray-500 px-2 cursor-pointer" onClick={toggleDarkMode}>
        {darkMode ? (
          <MdModeNight
            // onClick={toggleDarkMode}
            className="text-black-400 hover:text-black-500 transition duration-300 cursor-pointer"
          />
        ) : (
          <MdOutlineLightMode
            // onClick={toggleDarkMode}
            className="text-black-400 hover:text-black-500 transition duration-300 cursor-pointer"
          />
        )}
      </div>
      <div className="px-2 dark:text-[#477592]">Hindi</div>
    </div>
  );
};

export default TopHeader;
