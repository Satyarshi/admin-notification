import React, { useState } from "react";
import RejectionForm from "./RejectionForm";
import { IoClose } from "react-icons/io5";

const UserDetailForm = ({ user, onClose }) => {
  if (!user) return null; // Do not render if no user is selected
  const [showRejectionForm, setShowRejectionForm] = useState(false);

  const handleReject = () => {
    setShowRejectionForm(true);
  };

  const handleCloseRejectionForm = () => {
    setShowRejectionForm(false);
  };

  const handleRejectionSubmit = () => {
    alert("Rejection submitted!");
    setShowRejectionForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-[800px] shadow-lg flex flex-col mt-96 relative">
        {/* Header */}
        {/* Close Button */}
        <button
          className="absolute right-0 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <IoClose size={40} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Details</h2>
        

        {/* Profile Picture */}
        <div className="flex flex-col mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-2">
            <span className="text-gray-500">Profile</span>
          </div>
          <button className="text-blue-600 underline text-sm w-24">
            Change Picture
          </button>
        </div>

        {/* Personal Information */}
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700">First Name:</label>
            <input
              type="text"
              value={user.name.split(" ")[0]}
              className="border p-2 rounded-md w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name:</label>
            <input
              type="text"
              value={user.name.split(" ")[1]}
              className="border p-2 rounded-md w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone:</label>
            <input
              type="text"
              value={user.phone}
              className="border p-2 rounded-md w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Designation:</label>
            <input
              type="text"
              value={user.designation}
              className="border p-2 rounded-md w-full bg-gray-100"
              readOnly
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Email Address:</label>
          <input
            type="email"
            value={user.email}
            className="border p-2 rounded-md w-full bg-gray-100"
            readOnly
          />
        </div>

        {/* Office Information */}
        <h3 className="text-lg font-semibold my-4">Office Information</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Office Name:</label>
          <input
            type="text"
            value={user.officeName}
            className="border p-2 rounded-md w-full bg-gray-100"
            readOnly
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">State:</label>
            <input
              type="text"
              value={user.state}
              className="border p-2 rounded-md w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">City:</label>
            <input
              type="text"
              value={user.city}
              className="border p-2 rounded-md w-full bg-gray-100"
              readOnly
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Office Address:</label>
            <textarea
              value={user.officeAddress}
              className="border p-2 rounded-md w-full bg-gray-100"
              rows="2"
              readOnly
            ></textarea>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="bg-[#ED3030] border border-red-300 text-white rounded-md px-4 py-2 shadow-md"
            onClick={handleReject}
          >
            Reject
          </button>
          <button className="bg-[#17A110] text-white rounded-md px-4 py-2 shadow-md">
            Approve
          </button>
        </div>
      </div>
      {/* Rejection Form Modal */}
      {showRejectionForm && (
        <RejectionForm
          onClose={handleCloseRejectionForm}
          onSubmit={handleRejectionSubmit}
        />
      )}
    </div>
  );
};

export default UserDetailForm;
