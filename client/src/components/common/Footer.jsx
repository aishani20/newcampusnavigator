import React from "react";
import Logo from "../../assests/LogoImage.png";
import CurvedLine from "../../assests/curveUnderline.svg";
import ForwardArrow from "../../assests/ForwardArrow.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1292px] flex flex-col mx-auto">
      <div className="relative montserrat h-[26.34px]">
        <div className="flex item-center absolute gap-[1px]">
          <img src={Logo} alt="Logo" className="w-[27.16px]" />
          <div className="text-[19.11px] font-bold">
            Campus<span className="text-[#3652DD]">Navigator</span>
          </div>
        </div>
        <div className="absolute w-[205px] top-[15px]">
          <img src={CurvedLine} alt="CurvedLine" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-2">
        <div className="flex flex-col">
          <b>+91 9340204054</b>
          <div>abtyagi150702@gmail.com</div>
        </div>
        <div className="bg-[#3652DD] flex md:flex-row flex-col md:items-center rounded-[10px] 
                      text-white px-[42px] md:justify-around items-start ">
          <div className="text-[18px] font-bold">
            Subscribe to Our Newsletter
          </div>
          <div className="bg-white flex justify-between rounded-[6px] ">
            <div className="text-[14px]  text-[#0A142F]">Email Address</div>
            <img
              src={ForwardArrow}
              alt="ForwardArrow"
              className=" bg-[#D6D6D6] rounded-r-[6px]"
            />
          </div>
        </div>
      </div>
      <hr className="border my-4" />
      <div className="flex md:flex-row flex-col items-center md:justify-between md:items-center">
        <div className="flex items-center gap-3">
          <span>Social Media</span>
          <span className="flex">
            <FaInstagramSquare /> <FaSquareXTwitter /> <FaLinkedin />
          </span>
        </div>
        <div className="flex gap-4">
          <span>A product of</span>
          <img src={Logo} alt="Logo" className="w-[26.16px]" />
        </div>
        <div>© 2024 ABTYAGI. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
