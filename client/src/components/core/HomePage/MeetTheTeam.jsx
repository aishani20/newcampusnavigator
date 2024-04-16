import React from "react";
import assestsData from "../../../assests/data/data.json";
import abhishekTyagi from "../../../assests/ContributersImages/abhishekTyagi.jpg";
import aishaniMohapatra from "../../../assests/ContributersImages/aishaniMohapatra.jpg";
import himanshuKoshti from "../../../assests/ContributersImages/himanshuKoshti.jpg";
import bhavikaSurywanshi from "../../../assests/ContributersImages/bhavikaSurywanshi.jpeg";



const MeetOurTeamPage = () => {
  const teamMembers = assestsData.teamMembers;
    
  return (
    <div>
      <div className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-[#C5C4C2]">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div className="flex flex-col items-center justify-center space-y-4" key={index}>
              <img
                src={teamMembers.imgSrc}
                alt={member.name}
                className="w-32 h-32 rounded-full"
              />
              <div className="text-lg font-semibold dark:text-[#f1f0ed]">{member.name}</div>
              <div className="text-sm text-gray-600 dark:text-[#C5C4C2]">{member.role}</div>
              <div className="text-sm text-gray-600 dark:text-[#C5C4C2]">{member.email}</div>
              <div className="text-sm text-gray-600 dark:text-[#C5C4C2]">{member.contact}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 dark:text-[#C5C4C2]">
          <h2 className="text-xl font-bold mb-4 dark:text-[#f1f0ed]">Project Coordinator</h2>
          <p>Prof. Mukesh Azad Sir</p><div className="mb-6"></div>
          <h2 className="text-xl font-bold mb-4 dark:text-[#f1f0ed]">Supervisor</h2>
          <p> Dr. Sunil Joshi Sir (Professor, CSE)</p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeamPage;
