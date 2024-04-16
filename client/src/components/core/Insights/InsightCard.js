import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { SlShareAlt } from "react-icons/sl";
import { LiaCommentAlt } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import TimeDiffCalculator from "../../../utils/TimeDiffCalculator";

import { useSelector, useDispatch } from "react-redux";
// import { setLoading } from "../../../slices/authSlice";

const InsightCard = ({ insight, allInsights }) => {
  const createdDate = new Date(insight.createdAt);
  const currentDate = new Date();
  const authoredTime = TimeDiffCalculator(currentDate, createdDate);

  const { loading } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setLoading(false));
  // },[allInsights,loading]);

  return (
    <div>
      <div className="mx-auto my-4 bg-white border border-gray-200 p-6 rounded-md max-w-3xl shadow-sm  dark:bg-[#1E2023] ">
        <div className="items-center mb-4 flex">
          <Link to={`/username`}>
            <VscAccount className="w-10 h-10 rounded-md object-cover mr-2 dark:text-[#A2A19F]" />
          </Link>
          <div className="flex flex-col w-full dark:text-[#FFFFFF]">
            <div className="font-bold text-lg dark:text-[#A2A19F]">
              <span>{insight.appliedRole}</span> -{" "}
              <span>{insight.appliedCompany}</span>
            </div>
            <div className="text-gray-600 flex justify-between items-center">
              <div className="text-sm dark:text-[#88857F]">Person name whose experience shown</div>
              <div className="flex items-center ml-4 relative">
                <p className="text-sm text-gray-500 mr-2">
                  {authoredTime}
                  <span className="ml-1">ago</span>
                </p>
                <div
                  className="flex cursor-pointer"
                  onClick={() => console.log("Clicked")}
                >
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-20"> 
            <div className="mb-2 dark:text-[#3C667A]">
              Total No. of round :{" "}
              <span className="font-bold">{insight.rounds}</span>
            </div>
            <div className="mb-2 dark:text-[#CFC7BB]">
              Approx Package offered(LPA) :{" "}
              <span className="font-bold dark:text-[#FFFFFF]">{insight.package}</span>
            </div>
          </div>
          <div className="mb-2">
            <p className="font-bold dark:text-[#FFFFFF]">Interview Questions</p>
            <p className="dark:text-[#CFC7BB]">{insight.interviewQuestions}</p>
          </div>

          <div>
            <p className="font-bold dark:text-[#FFFFFF]">Interview Process Description</p>
            <p classname="dark:text-[#CFC7BB]">{insight.interviewProcess}</p>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm">
          <button className="flex items-center hover:text-blue-600">
            <SlLike className="mr-1.5" />
            Like
          </button>
          <button className="flex items-center ml-4 hover:text-green-600">
            <LiaCommentAlt className="mr-1.5" />
            Comment
          </button>
          <button className="flex items-center ml-4 hover:text-indigo-600">
            <SlShareAlt className="mr-1.5" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
