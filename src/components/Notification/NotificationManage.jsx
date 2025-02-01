import React, { useState } from "react";

const NotificationManage = ({ setActiveComponent }) => {
  const [activeOption, setActiveOption] = useState("CreateNotification");

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setActiveComponent(option); // Set the active component in Dashboard
  };

  return (
    <div className="w-[20vw] h-40 rounded-xl border-[#EDEDED] border-[1.5px] bg-white notify pb-56 lg:pb-0">
      <p className="p-5 text-lg font-bold font-poppins">
        Notification Management
      </p>
      <button
        className={`pl-10 pr-2 mb-4 ${
          activeOption === "CreateNotification"
            ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
            : "text-[#AEAEAE]"
        }`}
        onClick={() => handleOptionClick("CreateNotification")}
      >
        Create Notification
      </button>
      <button
        className={`pl-10 pr-2 ${
          activeOption === "ManageNotification"
            ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
            : "text-[#AEAEAE]"
        }`}
        onClick={() => handleOptionClick("ManageNotification")}
      >
        Manage Notification
      </button>
    </div>
  );
};

export default NotificationManage;
