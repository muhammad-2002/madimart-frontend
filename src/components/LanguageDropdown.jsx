// npm install flag-icons

import "flag-icons/css/flag-icons.min.css";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    console.log("Selected language:", language);
  };
  return (
    <div>
      <div className="relative inline-block text-left w-[80px] items-center text-sm ">
        {/* Selected Language Display */}
        <div className="flex items-center cursor-pointer  text-white py-2  ">
          <span
            className={`fi ${
              selectedLanguage === "en" ? "fi-us" : "fi-bd"
            } mr-2`}
          ></span>
          <span>{selectedLanguage === "en" ? "English" : "বাংলা"}</span>
          <FaAngleDown className="text-sm"></FaAngleDown>
        </div>

        {/* Dropdown Menu (Visible on Hover) */}
        <div className="expand absolute left-[-40px] mt-[2px] w-32 bg-white border border-gray-200 shadow-lg  group-hover:block px-1 text-sm">
          <ul className="py-1">
            <li
              onClick={() => handleLanguageChange("en")}
              className="flex items-center px-2 py-1 text-gray-700 border-gray-300 border-2 border-solid cursor-pointer hover:border-[var(--second)] hover:bg-gray-100 mb-1"
            >
              <span className="fi fi-us mr-2"></span>
              <span>English</span>
            </li>
            <li
              onClick={() => handleLanguageChange("bn")}
              className="flex items-center px-2 py-1 text-gray-700 cursor-pointer border-gray-300 border-2  hover:border-[var(--second)]  border-solid"
            >
              <span className="fi fi-bd mr-2"></span>
              <span>বাংলা</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
