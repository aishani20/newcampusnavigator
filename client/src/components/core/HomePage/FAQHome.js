import React from "react";
import { FaPlus } from "react-icons/fa";
const FAQHome = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span class="">Frequently Asked Questions</span>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between">
            <p>What is the Placement Management System?</p>
            <FaPlus />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p>
              How is Placement Software helpful for higher education
              institutions?
            </p>
            <FaPlus />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p>What are the main features of Placement Software?</p>
            <FaPlus />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p>
              Can the Creatrix Placement Management System be customizable and
              integrable with other education modules?
            </p>
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHome;
