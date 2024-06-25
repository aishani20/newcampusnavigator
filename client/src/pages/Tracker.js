import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import navigatorsIcon from "../assests/tracker/tracknote-removebg-preview.png";

const Tracker = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="flex">
      <div className="border-b flex flex-col items-center my-2 gap-4 p-2 border-r-4 justify-center">
        <div
          className={`flex items-center border rounded-lg my-2 mb-6 py-1 px-4 ${
            showSearch ? "bg-[#F2F2F2]" : "bg-[#9e9e9e26]"
          }`}
        >
          <input
            type="text"
            name="search"
            onClick={() => setShowSearch(true)}
            className={`outline-none ${
              showSearch ? "bg-[#9e9e9e26]" : "bg-[#F2F2F2]"
            }`}
          />
          <FaSearch />
        </div>
        <div className="w-full">
          <div className="hover:bg-[#F5F5F5] py-2 flex items-center gap-2 px-4 cursor-pointer">
            <img src={navigatorsIcon} alt="navigatorsIcon"  className="w-7 h-7" />
            <span>Applied Companies</span>
          </div>
          <div className="hover:bg-[#F5F5F5] py-2 flex items-center gap-2 px-4 cursor-pointer">
            <img src={navigatorsIcon} alt="navigatorsIcon"  className="w-7 h-7" />
            <span>Linkedin Connections</span>
          </div>
          <div className="hover:bg-[#F5F5F5] py-2 flex items-center gap-2 px-4 cursor-pointer">
            <img src={navigatorsIcon} alt="navigatorsIcon"  className="w-7 h-7" />
            <span>Day Tracker</span>
          </div>
        </div>
      </div>
      <div>This is the right part</div>
    </div>
  );
};

export default Tracker;
