// import React from "react";
// import laptopImage from "../../../assests/laptopFrame.png";
// const HeroSection = () => {
//   return (
//     <section className="flex justify-center items-center py-12">
//       <div>
//         <h1 className="font-bold">Chart Your Career Course: Where Insights Meet Opportunity!</h1>
//         <h2>Building Bridges to Success: Empowering Student Journeys!</h2>
//         {/* Add any additional buttons or text here */}
//       </div>

//       <div className="md:w-1/2 relative mt-8 md:mt-0">
//         <img src={laptopImage} alt="Laptop Frame" className="w-full" />
//         <div className="absolute inset-11 flex items-center justify-center">
//           <iframe
//             width="90%"
//             height="100%"
//             src="https://www.youtube.com/embed/0yw-z6f7Mb4?autoplay=1&mute=1"
//             title="Video Frame"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//             autoPlay
//           >
//           </iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import laptopImage from "../../../assests/laptopFrame.png";

// const HeroSection = () => {
//   return (
//     <section className="flex justify-center items-center py-12 bg-gray-100">
//       <div className="max-w-3xl mx-auto px-4 text-center">
//         <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
//           Chart Your Career Course:{" "}
//           <span className="text-blue-500 ">Where Insights Meet Opportunity!</span>
//         </h1>
//         <h2 className="text-lg md:text-xl text-gray-700 mb-8">
//           Building Bridges to Success: Empowering Student Journeys!
//         </h2>
//         {/* Add any additional buttons or text here */}
//       </div>

//       <div className="md:w-1/2 relative mt-8 md:mt-0">
//         <img src={laptopImage} alt="Laptop Frame" className="w-full rounded-lg shadow-xl" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <iframe
//             width="100%"
//             height="100%"
//             src="https://www.youtube.com/embed/0yw-z6f7Mb4?autoplay=1&mute=1"
//             title="Video Frame"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             autoPlay
//             className="rounded-lg shadow-xl"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import laptopImage from "../../../assests/laptopFrame.png";

const HeroSection = () => {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center py-12 bg-gray-100 dark:bg-[#151618]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-2 dark:text-[#C9C1B4]">
          Chart Your Career Course:{" "}
          <div className="text-blue-500 dark:text-[#83FCFF]">Where Insights Meet Opportunity!</div>
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 mb-8 dark:text-[#B2A898]">
          Building Bridges to Success: Empowering Student Journeys!
        </h2>
        {/* Add any additional buttons or text here */}
      </div>

      <div className="relative md:w-[500px] sm:mx-2 mx-8">
        <img src={laptopImage} alt="Laptop Frame" className="w-full z-0" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <iframe
            src="https://www.youtube.com/embed/QECidbbwPzo?si=kO31BN3efxl_g1H-&amp;start=68&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullscreen
            autoPlay
            className="w-[82%] h-[88%]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
