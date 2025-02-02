import React, { useState } from "react";

const CycleManage = ({ setActiveComponent }) => {
  const [activeOption, setActiveOption] = useState("AddNewCycle");

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setActiveComponent(option); // Set the active component in Dashboard
  };

  return (
    <div className="w-[20vw] h-40 rounded-xl border-[#EDEDED] border-[1.5px] bg-white cycle pb-52 lg:pb-0">
      <p className="p-5 text-lg font-bold font-poppins">Cycle Management</p>
      <div className="m-0 p-0 flex flex-col items-start">
        <button
          className={`pl-10 mb-4 pr-2 ${
            activeOption === "AddNewCycle"
              ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
              : "text-[#AEAEAE]"
          }`}
          onClick={() => handleOptionClick("AddNewCycle")}
        >
          Add New Cycle
        </button>
        <button
          className={`pl-10 pr-2 ${
            activeOption === "ManageCycles"
              ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
              : "text-[#AEAEAE]"
          }`}
          onClick={() => handleOptionClick("ManageCycles")}
        >
          Manage Cycles
        </button>
      </div>
    </div>
  );
};

export default CycleManage;
