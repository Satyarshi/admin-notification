import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const CycleDetail = ({ cycle, onClose, onUpdate }) => {
  if (!cycle) return null; // Do not render if no cycle is selected

  // Local state for editable fields
  const [editedCycle, setEditedCycle] = useState({ ...cycle });

  // Handle input changes
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setEditedCycle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-[800px] shadow-lg flex flex-col mt-36 h-max ml-32 relative">
        {/* Close Button */}
        <button
          className="absolute right-0 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <IoClose size={40} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Details</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700">
              Application Start Date:
            </label>
            <input
              type="text"
              name="appStartDate"
              value={editedCycle.appStartDate}
              onChange={handleChange}
              className="border p-2 rounded-md w-full bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-700">Application End Date:</label>
            <input
              type="text"
              name="appEndDate"
              value={editedCycle.appEndDate}
              onChange={handleChange}
              className="border p-2 rounded-md w-full bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Last Date For Panchayat To Report:
            </label>
            <input
              type="text"
              name="panchayatReportDate"
              value={editedCycle.panchayatReportDate}
              onChange={handleChange}
              className="border p-2 rounded-md w-full bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Last Date For Govt. Official To Report:
            </label>
            <input
              type="text"
              name="officialReportDate"
              value={editedCycle.officialReportDate}
              onChange={handleChange}
              className="border p-2 rounded-md w-full bg-gray-100"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={editedCycle.title}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 mt-4">Description:</label>
          <textarea
            name="description"
            value={editedCycle.description}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-100 h-40 resize-none"
            rows={1}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="bg-[#17A110] text-white rounded-md px-4 py-2 shadow-md"
            onClick={() => onUpdate(editedCycle)} // Pass updated data to parent
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CycleDetail;
