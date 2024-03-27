import React from "react";
import CreateInsights from "../components/core/Insights/CreateInsight";
import ShowInsights from "../components/core/Insights/ShowInsights";
import SearchInsight from "../components/core/Insights/SearchInsight";

const Insights = () => {
  return (
    <div>
      <div className="flex">
        <CreateInsights />
        <SearchInsight />
      </div>
      <div>
        <ShowInsights />
      </div>
    </div>
  );
};

export default Insights;
