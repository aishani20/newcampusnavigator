import React, { useState } from "react";
import Logo from "../../assests/LogoImage.png";
import LightCurvedLine from "../../assests/curveUnderline.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import DarkCurvedLine from "../../assests/darkCurveUnderline.png";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Footer = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const [email, setEmail] = useState(null);
  const { user } = useSelector((state) => state.profile);
  const subscribeHandler = () => {
    toast.success("Subscribed Successfully");
    setEmail("");
  };

  return (
    <div className="max-w-[1292px] flex flex-col mx-auto mb-5 ">
      <div className="montserrat">
        <div className="relative">
          <div className="flex item-center absolute">
            <img src={Logo} alt="Logo" className="w-7" />
            <div className="font-bold text-lg">
              <span className="dark:text-white">Campus</span>
              <span className="text-[#3652DD]">Navigator</span>
            </div>
          </div>
          <div className="absolute w-48 top-4">
            <img
              src={!darkMode ? LightCurvedLine : DarkCurvedLine}
              alt="CurvedLine"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 dark:text-[#C5C4C2] justify-end mt-2">
          <a
            href="https://www.instagram.com/ab_tyagi15/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="w-6 h-6 text-[#F71F2B]" />
          </a>
          <a
            href="https://x.com/abtyagi15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="w-6 h-6 text-[#000000] dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/abtyagi15/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 text-[#0073B1]" />
          </a>
        </div>
      </div>
      <div className="flex mt-7 md:flex-row flex-col">
        <div className="flex md:w-3/5 md:border-none border-2 border-dashed">
          <ul className="md:border-l-2 border-dashed sm:p-2 sm:mx-2 py-2">
            <li>
              <a
                href="https://drive.google.com/file/d/1kitzmM8lSb27pezkoipvkCjWI_u9BY7x/view"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#C5C4C2] hover:bg-[#2b2b2b0a] dark:hover:bg-[#5c5b5b] px-2 py-1"
              >
                Project Thesis
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Xv9BwYmXPT-XIzW61yBRSyn3Zmg0-qwh/view"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#C5C4C2] hover:bg-[#2b2b2b0a] dark:hover:bg-[#5c5b5b] px-2 py-1"
              >
                Progress Report
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1UvdaZFVZCBgKumWOA4y-Y5TAnT65Xm_g/view"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#C5C4C2] hover:bg-[#2b2b2b0a] dark:hover:bg-[#5c5b5b] px-2 py-1"
              >
                Project Poster
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1wTs5cdvlZEUIEbOkjGRLvCec6ll73laq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#C5C4C2] hover:bg-[#2b2b2b0a] dark:hover:bg-[#5c5b5b] px-2 py-1"
              >
                Project PPT
              </a>
            </li>
          </ul>
          <ul className="md:border-l-2 border-dashed sm:p-2 sm:mx-2 py-2">
            <li>
              <a
                href="https://www.satiengg.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#C5C4C2] hover:bg-[#2b2b2b0a] dark:hover:bg-[#5c5b5b] px-2 py-1"
              >
                Institute Website
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fluxsati/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#C5C4C2] hover:bg-[#2b2b2b0a] dark:hover:bg-[#5c5b5b] px-2 py-1"
              >
                Technical Club FLUX
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/training-and-placement-cell-sati-vidisha/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-[#C5C4C2] hover:bg-[#2b2b2b0a] dark:hover:bg-[#5c5b5b] px-2 py-1"
              >
                Training and Placement cell
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:gap-1 gap-3 md:w-2/5 my-3">
          {user?.userRole !== "major" && (
            <div className="flex flex-col dark:text-[#C5C4C2]">
              <b>+91 9340204054</b>
              <p>abtyagi150702@gmail.com</p>
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email Address"
              className="py-1 px-3 border rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-[#3652DD] py-1 px-4 rounded-md text-white"
              onClick={subscribeHandler}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="border my-4 dark:border-[#51585B]" />
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
        <div className="flex sm:gap-4 dark:text-[#C5C4C2] sm:flex-row flex-col">
          <div className="flex gap-4">
            <span>A product of</span>
            <img src={Logo} alt="Logo" className="w-[26.16px]" />
          </div>
          <div>
            © 2024
            {`${user?.userRole === "major" ? " CS2024TID16" : " ABTYAGI"}`}. All
            rights reserved
          </div>
        </div>
        <div className="flex gap-2">
          <p className="cursor-pointer dark:text-[#C5C4C2] underline">
            Privacy Policy
          </p>
          <p className="cursor-pointer dark:text-[#C5C4C2] underline">
            Sitemap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
