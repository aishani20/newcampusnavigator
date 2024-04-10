import React from "react";
import { Link } from "react-router-dom";
import Dino from "../components/core/NotFound/Dino";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div>
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        
        <Dino/>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home Page
        </Link>
      </div>
      
    </div>
  );
};

export default NotFound;
