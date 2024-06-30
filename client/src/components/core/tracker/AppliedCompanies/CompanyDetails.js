import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { timeExtracterFromUTC } from "../../../../utils/TimeFromUTCDateFormat";
const CompanyDetails = ({ companyDetails }) => {
  return (
    <div>
      <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-white">Today</span>
          <span className="bg-[#ded9d9] rounded-full px-1 font-bold text-[#6A89CC]">
            {companyDetails.length ? companyDetails.length : <p>0</p>}
          </span>
        </div>
        <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
      </div>
      <div className="px-4">
        <table className="w-full">
          <thead className="border">
            <tr>
              <th>Company Name</th>
              <th>Applied Role</th>
              <th>Location</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className="border">
            {Object.values(companyDetails).map((detail, key) => (
              <tr key={key}>
                <td>{detail.companyName}</td>
                <td>{detail.jobTitle}</td>
                <td>{detail.location}</td>
                <td>{timeExtracterFromUTC(detail.appliedDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyDetails;
