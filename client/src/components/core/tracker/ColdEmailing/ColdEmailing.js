import React from "react";
import { MdDelete } from "react-icons/md";


const ColdEmailing = () => {
  return (
    <div className="m-4 border-2 border-black rounded-md min-h-80 ">
      <div className="flex xl:w-4/6 justify-between mt-4 mx-2 gap-6">
        <div className="mr-2">
          <p>List</p>
          <p className="border-t-4 border-[#3652DD] rounded-md mt-1"></p>
        </div>
        <div className="mr-2">
          <p>Send Emails</p>
          <p className="border-t-4 border-[#3652DD] rounded-md mt-1"></p>
        </div>
        <div className="mr-2">
          <p>Create Campaign</p>
          <p className="border-t-4 border-[#3652DD] rounded-md mt-1"></p>
        </div>
      </div>
      <div className="border border-b-2 border-b-black border-t-0"></div>
      <div className="mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-500 text-white">
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-100 group/table-row">
              <td className="px-4 py-2">taruna@razorpay.com</td>
              <td className="px-4 py-2">Razorpay</td>
              <td className="px-4 py-2">Full Stac Developer</td>
              <td className="pl-4 py-2 flex items-center">
                <span className="text-green-500">Active</span>
                <span className="hidden group-hover/table-row:inline-block"><MdDelete /></span>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100 group/table-row">
              <td className="px-4 py-2">subham@ntt.com</td>
              <td className="px-4 py-2">NTT data</td>
              <td className="px-4 py-2">Associated Engineer</td>
              <td className="pl-4 py-2 flex items-center">
                <span className="text-green-500">Active</span>
                <span className="hidden group-hover/table-row:inline-block"><MdDelete /></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ColdEmailing;
