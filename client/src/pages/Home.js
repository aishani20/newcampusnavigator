import React, { useEffect } from "react";
import HeroSection from "../components/core/HomePage/HeroSection";
import FAQHome from "../components/core/HomePage/FAQHome";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../slices/authSlice";
import ContactUs from "../components/core/HomePage/ContactUs";
import MeetTheTeam from "../components/core/HomePage/MeetTheTeam";
import CompleteCNAllComponentsImg from "../assests/CompleteCNAllComponents.png";
const Home = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Checking loading state in Home.js", loading);
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, [loading]);
  console.log("Checking loading state in Home.js", loading);
  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="animate-pulse">
          <section className="flex justify-center items-center py-12">
            <div className="transition-all duration-500 ease-in-out">
              <p className="bg-gray-300 h-10 w-60"></p>
              <p className="bg-gray-300 h-6 w-40 mt-4"></p>
              {/* Add any additional buttons or text here */}
            </div>

            <div className="md:w-1/2 relative mt-8 md:mt-0 transition-all duration-500 ease-in-out">
              <div className="bg-gray-300 w-full h-[300px]"></div>
              <div className="absolute inset-11 flex items-center justify-center">
                <div className="bg-gray-300 w-[90%] h-[200px]"></div>
              </div>
            </div>
          </section>

          <div className="transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-between">
              <span className="bg-gray-300 h-8 w-60"></span>
            </div>
            <div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="bg-gray-300 h-6 w-[80%]"></p>
                  <div className="bg-gray-300 h-6 w-6"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="bg-gray-300 h-6 w-[80%]"></p>
                  <div className="bg-gray-300 h-6 w-6"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="bg-gray-300 h-6 w-[80%]"></p>
                  <div className="bg-gray-300 h-6 w-6"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="bg-gray-300 h-6 w-[80%]"></p>
                  <div className="bg-gray-300 h-6 w-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <HeroSection />
          </div>
          <div>
            <FAQHome />
          </div>
          <div>
            <img src={CompleteCNAllComponentsImg} alt="CompleteCNAllComponents" className="" />
          </div>
          <div>
            <MeetTheTeam />
          </div>
          <div>
            <ContactUs />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
