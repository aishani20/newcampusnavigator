import React, { useState, useEffect } from "react";
import InsightCard from "./InsightCard";

const ShowInsights = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    async function getInsights() {
      const response = await fetch(`${backendUrl}/getAllInsights`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      const insightsArray = data.insights;
      console.log(
        "Insights recieved from backend",
        insightsArray[0],
        typeof insightsArray
      );

      setInsights(insightsArray);
    }
    getInsights();
  }, [backendUrl]);
  // const newInsightArray = Object.values(insights);
  // console.log("Insights", insights,typeof(newInsightArray[0]);
  return (
    <div>
    {
      Object.values(insights).map((insight) => {
        return (
          <InsightCard key={insight._id} insight={insight} />
        )
      })
    }
    </div>
  );
};

export default ShowInsights;
