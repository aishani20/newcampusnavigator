import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PlusIcon from "../../../../assests/tracker/daily_target_plus.png";
import axios from "axios";
import { useSelector } from "react-redux";
import CompanyDetails from "./CompanyDetails";
import ISOCurrentDateFormatter from "../../../../utils/ISOCurrentDateFormatter";

const AppliedCompanies = () => {
  const [dailyTarget, setDailyTarget] = useState(0);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [selectedDate, setSelectedDate] = useState(ISOCurrentDateFormatter());
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const { token } = useSelector((state) => state.auth);

  //updating the value of daily target in the database
  const sendDailyTarget = async () => {
    console.log("Before sending request to backend");
    await axios
      .post(`${backendUrl}/daily-target`, dailyTarget, {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let requiredDateLowerLimit = new Date(selectedDate);
    requiredDateLowerLimit.setUTCHours(0, 0, 0, 0);
    let requiredDateUpperLimit = new Date(selectedDate);
    requiredDateUpperLimit.setUTCHours(23, 59, 59, 999);
    const isoStringLowerLimitDate = requiredDateLowerLimit.toISOString();
    const isoStringUpperLimitDate = requiredDateUpperLimit.toISOString();

    const fetchDailyTarget = async () => {
      const response = await axios.get(`${backendUrl}/applied-companies`, {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
        params: {
          upperDate: isoStringUpperLimitDate,
          lowerDate: isoStringLowerLimitDate,
        },
      });
      const data = await response.data;
      const recievedData = data.companyData;
      const dailyTargetValue = recievedData.length;
      console.log("Length of the array recieved : ", dailyTargetValue);
      setDailyTarget(dailyTargetValue);
      console.log("Type of the response data", recievedData);
      setCompanyDetails(recievedData);
      console.log("Checking the details", companyDetails);
    };

    fetchDailyTarget();
  }, []);
  return (
    <div>
      <div className="flex justify-between my-4">
        <div className="ml-2">
          <input
            type="date"
            name="selectedDate"
            value={selectedDate}
            onChange={(event) => {
              setSelectedDate(event.target.value);
              console.log("This is the selected date", selectedDate);
            }}
          />
        </div>
        <div className="flex gap-0.5 dark:text-white items-center">
          Daily Target : <span>{dailyTarget}</span>
          <span>/</span>
          <span>40</span>
          <img
            src={PlusIcon}
            alt="Icon to increase target number"
            className="w-6 h-6 cursor-pointer"
            onClick={(prev) => {
              dailyTarget < 40 &&
                setDailyTarget((prev) => prev + 1) &&
                console.log(dailyTarget);
              sendDailyTarget();
            }}
          />
        </div>
      </div>
      <div className="px-2">
        <CompanyDetails companyDetails={companyDetails} />
      </div>
    </div>
  );
};

export default AppliedCompanies;
