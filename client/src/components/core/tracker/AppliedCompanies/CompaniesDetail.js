import React from "react";
import { IoIosArrowDown } from "react-icons/io";


const CompaniesDetail = () => {
  return (
    <div>
      <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
        <span className="text-white">Today</span>
        <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
      </div>
      <div className="px-4">
        <table className="w-full">
          <thead className="border">
            <td>Company Name</td>
            <td>Applied Role</td>
            <td>Time</td>
            <td>Other</td>
          </thead>
          <tbody className="border">
            <tr>
              <td>Hexaware</td>
              <td>Graduate Engineer Trainee</td>
              <td>{Date.now()}</td>
              <td>No Remark</td>
            </tr>
            <tr>
              <td>Talent Serve</td>
              <td>Full Stack Developer</td>
              <td>{Date.now()}</td>
              <td>No Remark</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesDetail;
