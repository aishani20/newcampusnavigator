import React, { useState } from "react";
import CreateInsights from "../components/core/Insights/CreateInsight";
import ShowInsights from "../components/core/Insights/ShowInsights";
// import SearchInsight from "../components/core/Insights/SearchInsight";

const Insights = () => {
  const [allInsights, setAllInsights] = useState([]);
  const [isNewInsight, setIsNewInsight] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  return (
    <div>
      <div className="flex">
        <CreateInsights
          setAllInsights={setAllInsights}
          setIsNewInsight={setIsNewInsight}
        />
        {/* <SearchInsight /> */}
      </div>
      <div>
        <ShowInsights
          allInsights={allInsights}
          setAllInsights={setAllInsights}
          isNewInsight={isNewInsight}
          showLoader={showLoader} // Pass the showLoader state as a prop
        />
      </div>
    </div>
  );
};

export default Insights;
