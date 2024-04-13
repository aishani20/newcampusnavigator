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
        }, 1000);
      }
    };

    fetchData();
  }, [backendUrl, dispatch, setAllInsights,isNewInsight]);
  console.log("Showing all insights", allInsights);
  console.log("Checking the loading in show insight ", loading);

  return (
    <>
      {showLoader && loading ? (
        <div className="w-full  h-96 ">
          <div className="animate-pulse border w-[700px] mx-auto h-96">
            Loading....
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
