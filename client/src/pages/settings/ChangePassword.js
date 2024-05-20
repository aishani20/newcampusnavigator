import React from "react";

const ChangePassword = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mt-8 mb-4">Change Password</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-sm font-medium">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            placeholder="Enter your current password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            placeholder="Enter your new password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            placeholder="Confirm your new password"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
