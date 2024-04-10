import React from "react";
import laptopImage from "../../../assests/laptopFrame.png";
const HeroSection = () => {
  return (
    <section className="flex justify-center items-center py-12">
      <div>
        <h1>Join us to get insights</h1>
        <h2>Share your insights</h2>
        {/* Add any additional buttons or text here */}
      </div>

      <div className="md:w-1/2 relative mt-8 md:mt-0">
        <img src={laptopImage} alt="Laptop Frame" className="w-full" />
        <div className="absolute inset-11 flex items-center justify-center">
          <iframe
            width="90%"
            height="100%"
            src="https://www.youtube.com/embed/0yw-z6f7Mb4?autoplay=1&mute=1"
            title="Video Frame"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoPlay
          >
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
