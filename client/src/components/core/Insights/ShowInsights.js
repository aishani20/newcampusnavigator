import React, { useEffect } from "react";
import InsightCard from "./InsightCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../../slices/authSlice";

const ShowInsights = ({
  allInsights,
  setAllInsights,
  isNewInsight,
  showLoader,
}) => {
  const { loading } = useSelector((state) => state.auth);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(`${backendUrl}/getAllInsights`, {
          withCredentials: true,
        });
        const data = response.data;
        const insightsArray = data.insights.reverse();
        setAllInsights(insightsArray);
      } catch (error) {
        console.error("Error fetching insights:", error);
      } finally {
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 3000);
      }
    };

    fetchData();
  }, [backendUrl, dispatch, setAllInsights, isNewInsight]);
  console.log("Showing all insights", allInsights);
  console.log("Checking the loading in show insight ", loading);

  return (
    <>
      {showLoader && loading ? (
        <div className="mx-auto my-4 bg-white border border-gray-200 p-6 rounded-md max-w-3xl shadow-sm hover:bg-gray-100 animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
            <div className="flex flex-col">
              <div className="font-bold text-lg bg-gray-300 h-6 mb-2 w-48"></div>
              <div className="text-gray-600 flex justify-between items-center">
                <div className="text-sm bg-gray-300 h-4 w-1/3"></div>
                <div className="flex items-center ml-4">
                  <div className="text-sm text-gray-500 bg-gray-300 h-4 w-12"></div>
                  <div className="flex cursor-pointer bg-gray-300 h-6 w-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex gap-20">
              <div>
                <span className="font-bold bg-gray-300 h-6 w-24"></span>
              </div>
              <div>
                <span className="font-bold bg-gray-300 h-6 w-24"></span>
              </div>
            </div>
            <div className="mb-2">
              <p className="font-bold bg-gray-300 h-6 w-1/2"></p>
              <p className="bg-gray-300 h-4 w-full"></p>
            </div>
            <div>
              <p className="font-bold bg-gray-300 h-6 w-2/3"></p>
              <p className="bg-gray-300 h-4 w-full"></p>
            </div>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <button className="flex items-center hover:text-blue-600">
              <div className="w-4 h-4 bg-gray-300 mr-1"></div>
            </button>
            <button className="flex items-center ml-4 hover:text-green-600">
              <div className="w-4 h-4 bg-gray-300 mr-1"></div>
            </button>
            <button className="flex items-center ml-4 hover:text-indigo-600">
              <div className="w-4 h-4 bg-gray-300 mr-1"></div>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {Object.values(allInsights).map((insight, index) => {
            return <InsightCard key={index} insight={insight} allInsights />;
          })}
        </div>
      )}
    </>
  );
};

export default ShowInsights;
