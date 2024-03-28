import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import InsightForm from "./CreateInsightForm";

const CreateInsight = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };
  
  return (
    <div>
      <div
        className={`border flex gap-1 items-center p-2 rounded cursor-pointer`}
        onClick={modalHandler}
      >
        <FaPlus className="text-blue-500" />
        <span className="text-blue-500">Create a Insight</span>
      </div>
      {showModal && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-black bg-opacity-50 absolute inset-0" />
          <div className="absolute z-10">
            <InsightForm setShowModal={setShowModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateInsight;
