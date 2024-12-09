import React from "react";

const RejectionForm = ({ onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[400px]">
        <h3 className="text-lg font-semibold mb-4">Reason for Rejection</h3>
        <textarea
          className="border w-full h-32 p-2 rounded-md mb-4"
          placeholder="Enter the reason for rejection..."
        ></textarea>
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#F55E8A] text-white px-4 py-2 rounded-md"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectionForm;
