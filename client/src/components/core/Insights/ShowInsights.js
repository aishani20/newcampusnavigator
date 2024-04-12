import React, { useState, useEffect } from "react";
import InsightCard from "./InsightCard";
import axios from "axios";

const ShowInsights = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/getAllInsights`, { withCredentials: true })
      .then((response) => {
        const data = response.data;
        console.log(data);
        const insightsArray = data.insights;

        //updating the insights state
        setInsights(insightsArray);
      })
      .catch((err) => console.log(err));
  }, [backendUrl]);

  return (
    <div>
      {Object.values(insights).map((insight) => {
        return <InsightCard key={insight._id} insight={insight} />;
      })}
    </div>
  );
};

export default ShowInsights;
