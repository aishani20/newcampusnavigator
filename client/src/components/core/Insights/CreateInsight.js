import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import InsightForm from "./CreateInsightForm";

const CreateInsight = () => {
  const [showModal, setShowModal] = useState(false);

  function modalHandler() {
    console.log("Clicked");
    setShowModal((prev) => {
      return !prev;
    });
  }
  return (
    <div>
      <div
        className={`border flex gap-1 items-center p-2 rounded `}
        onClick={modalHandler}
      >
        <FaPlus className="text-blue-500" />
        <span className="text-blue-500">Create a Insight</span>
      </div>
      {showModal && (
        <div className="absolute border bg-black">
          <InsightForm />
        </div>
      )}
    </div>
  );
};

export default CreateInsight;
