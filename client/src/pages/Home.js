import React from "react";
import HeroSection from "../components/core/HomePage/HeroSection";
import FAQHome from "../components/core/HomePage/FAQHome";
const Home = () => {
  return (
    <div className="h-screen">
      <div>
        <HeroSection />
      </div>
      <div>
        <FAQHome/>
      </div>
    </div>
  );
};

export default Home;
