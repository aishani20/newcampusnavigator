import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mt-8 mb-4">Edit Profile</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="3"
            className="dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            placeholder="Tell something about yourself"
          ></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
