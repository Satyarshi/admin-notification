import React, { useState } from "react";

const NotificationManage = ({ setActiveComponent }) => {
  const [activeOption, setActiveOption] = useState("CreateNotification");

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setActiveComponent(option);
  };

  return (
    <div className="w-[20vw] h-40 rounded-xl border-[#EDEDED] border-[1.5px] bg-white notify">
      <p className="p-5 text-lg font-bold font-poppins">
        Notification Management
      </p>
      <button
        className={`pl-10 mb-4 ml-0 ${
          activeOption === "CreateNotification"
            ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
            : "text-[#AEAEAE]"
        }`}
        onClick={() => handleOptionClick("CreateNotification")}>
        Create Notification
      </button>
      <button
        className={`pl-10 ml-0 ${
          activeOption === "ManageNotification"
            ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
            : "text-[#AEAEAE]"
        }`}
        onClick={() => handleOptionClick("ManageNotification")}>
        Manage Notification
      </button>
    </div>
  );
};

export default NotificationManage;
