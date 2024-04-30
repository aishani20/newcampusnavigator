import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import InsightForm from "./CreateInsightForm";

const CreateInsight = ({ setAllInsights, setIsNewInsight }) => {
  const [showModal, setShowModal] = useState(false);
  // const [insightChange,setInsightChange] = useState(false);
  // useEffect(()=>{
  //   setInsightChange((prev)=>!prev);
  // },[allInsights]);
  
  return (
    <div>
      <div
        className={`border flex gap-1 items-center p-2 rounded cursor-pointer `}
        onClick={()=>{
          setShowModal(true)
          document.body.style.overflow = "hidden";
        }}
      >
        <FaPlus className="text-blue-500" />
        <span className="text-blue-500">Create a Insight</span>
      </div>
      {showModal && (
        <div className="absolute inset-0 flex justify-center items-center max-h-screen">
          <div
            className="bg-black dark:bg-[#292A2B] dark:bg-opacity-50 bg-opacity-50 absolute inset-0"
            onClick={() => {
              setShowModal(false)
              document.body.style.overflow = "auto";
            }}
          />
          <div className="absolute z-10">
            <InsightForm
              setShowModal={setShowModal}
              setAllInsights={setAllInsights}
              setIsNewInsight={setIsNewInsight}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateInsight;
