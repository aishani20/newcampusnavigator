import React, { useState } from "react";
import PredictForm from "../components/core/PredictPage/PredictionForm";
import { useSelector } from "react-redux";

const Predict = () => {
  const {loading} = useSelector((state)=>state.auth);
  const [predictionResult,setPredictionResult] = useState("");
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <PredictForm setPredictionResult={setPredictionResult}/>
      </div>
      <div className={`max-w-[650px] w-full p-4 bg-white border shadow-md rounded-lg md:mb-16 mb-20 mt-2 ${loading && "space-y-4 bg-slate-500 animate-pulse "}`}>
      {
        !loading && `Output: ${predictionResult}` 
      }
      
      </div>
    </div>
  );
};

export default Predict;
