import React, { useState } from "react";
import PredictForm from "../components/core/PredictPage/PredictionForm";
import { useSelector } from "react-redux";

const Predict = () => {
  const { loading } = useSelector((state) => state.auth);
  const [predictionResult, setPredictionResult] = useState("");
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <PredictForm setPredictionResult={setPredictionResult} />
      </div>
      {loading ? (
        <div
          className={`max-w-[650px] w-full p-4 bg-gray-200 animate-pulse border shadow-md rounded-lg md:mb-16 mb-20 mt-2`}
        >
          <div className="h-4 w-2/3 bg-gray-300 mb-4"></div>
          <div className="h-4 w-full bg-gray-300"></div>
        </div>
      ) : (
        <div
          className={`max-w-[650px] w-full p-4 bg-white border shadow-md rounded-lg md:mb-16 mb-20 mt-2  dark:bg-[#111314] dark:text-[#B2A898]`}
        >
          Output: {predictionResult}
        </div>
      )}
    </div>
  );
};

export default Predict;
