import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const CycleDetail = ({ cycle, onClose }) => {
  if (!cycle) return null; // Do not render if no cycle is selected
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-[800px] shadow-lg flex flex-col mt-36 relative">
        {/* Header */}
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
            <label className="block text-gray-700">Application Start Date:</label>
            <input
              type="text"
              value={cycle.appStartDate}
              className="border p-2 rounded-md w-full bg-gray-100"

            />
          </div>
          <div>
            <label className="block text-gray-700">Application End Date:</label>
            <input
              type="text"
              value={cycle.appEndDate}
              className="border p-2 rounded-md w-full bg-gray-100"

            />
          </div>
          <div>
            <label className="block text-gray-700">Last Date For Panchayat To Report:</label>
            <input
              type="text"
              value={cycle.panchayatReportDate}
              className="border p-2 rounded-md w-full bg-gray-100"

            />
          </div>
          <div>
            <label className="block text-gray-700">Last Date For Govt. Official To Report:</label>
            <input
              type="text"
              value={cycle.officialReportDate}
              className="border p-2 rounded-md w-full bg-gray-100"

            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={cycle.title}
            className="border p-2 rounded-md w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 mt-4">Description:</label>
          <textarea
            value={cycle.description}
            className="border p-2 rounded-md w-full bg-gray-100 h-40 resize-none" // Resize-none to prevent manual resizing
            rows={1} // Start with 1 row
          />
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="bg-[#17A110] text-white rounded-md px-4 py-2 shadow-md">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CycleDetail;
