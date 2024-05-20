import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Settings = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen">
      {/* Left part */}
      <div className="bg-gray-100 w-1/4 p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <div className="flex flex-col text-blue-500 hover:text-blue-700">
          <Link
            to="/settings/profile"
            className={`text-blue-500 hover:text-blue-700 
                      ${location.pathname === "/settings/profile" && "text-blue-900"}`}
          >
            Edit Profile
          </Link>

          <Link
            to="/settings/change-password"
            className={`text-blue-500 hover:text-blue-700 
                      ${location.pathname === "/settings/change-password" && "text-blue-900"}`}
          >
            Change Password
          </Link>

          <Link
            to="/settings/help"
            className={`text-blue-500 hover:text-blue-700 
                      ${location.pathname === "/settings/help" && "text-blue-900"}`}
          >
            Help
          </Link>

          <Link
            to="/settings/account-deactivation"
            className={`text-blue-500 hover:text-blue-700 
                      ${location.pathname === "/settings/account-deactivation" && "text-blue-900"}`}
          >
            Account Deactivation
          </Link>
        </div>
      </div>
      {/* Right part */}
      <div className="bg-gray-200 w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
