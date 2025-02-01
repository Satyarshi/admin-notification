import React, { useState } from "react";
import Select from "react-select"; // Import react-select

const CreateNotification = ({ showSuccessModal }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    notificationTo: "",
    blockCode: "",
    userIds: [],
    title: "",
    content: "",
  });

  // Sample list of users (Replace this with actual data from an API)
  const userOptions = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
    { value: "user3", label: "User 3" },
    { value: "user4", label: "User 4" },
  ];

  // Handle multi-select change
  const handleUserIdChange = (selectedOptions) => {
    setFormData({
      ...formData,
      userIds: selectedOptions || [], // Store array of selected users
    });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSendClick = (e) => {
    e.preventDefault();
    showSuccessModal();

    // Clear form
    setFormData({
      notificationTo: "",
      blockCode: "",
      userIds: [],
      title: "",
      content: "",
    });
  };

  return (
    <>
      <form>
      <div className="w-full md:w-[72vw] xl:w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">

          <p className="text-2xl font-bold m-4 pl-4">Create New Notification</p>
          <hr className="border-t-2 border-gray-200" />

          <div className="p-8 pr-10">
            <p className="text-lg font-bold mb-6">Notification Form</p>
            <hr className="border-t-2 border-gray-200 mb-8" />

            {/* Send Notification to */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-900">
                Send Notification to <span className="text-red-500">*</span>
              </label>
              <select
                id="notificationTo"
                name="notificationTo"
                required
                value={formData.notificationTo}
                onChange={handleChange}
                className="block w-full rounded-md border-0 p-3 text-sm mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 appearance-none bg-[#F9FAFB]"
              >
                <option value="">Select Recipient</option>
                <option value="Farmers">Farmers</option>
                <option value="Panchayat">Panchayat</option>
                <option value="Official">Official</option>
              </select>
            </div>

            {/* Block Code and User ID Multi-Select */}
            <div className="flex flex-col justify-between gap-4 xl:flex-row">
              <div className="mb-4 xl:w-[350px]">
                <label className="block text-sm font-medium text-gray-900">
                  Block Code
                </label>
                <input
                  id="blockCode"
                  name="blockCode"
                  type="text"
                  required
                  value={formData.blockCode}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-[#F9FAFB]"
                />
              </div>

              {/* Multi-Select User ID */}
              <div className="xl:w-96">
                <label className="block text-sm font-medium text-gray-900">
                  User ID
                </label>
                <Select
                  isMulti
                  options={userOptions}
                  value={formData.userIds}
                  onChange={handleUserIdChange}
                  styles={{
                    control: (base, { isFocused }) => ({
                      ...base,
                      width: "100%",
                      borderRadius: "0.375rem",
                      padding: "0.45rem",
                      backgroundColor: "#F9FAFB",
                      border: isFocused
                        ? "2px solid black"
                        : "1px solid #D1D5DB",
                      boxShadow: "0 0 0 0.3px rgba(0, 0, 0, 0.2)",
                      transition: "border-color 0.2s ease-in-out",
                      "&:hover": {
                        border: "2px solid black",
                      },
                    }),
                  }}
                  className="mt-2 block xl:w-full"
                  classNamePrefix="select"
                />
              </div>
            </div>

            <hr className="border-t-2 border-gray-200 my-5" />

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-[#F9FAFB]"
              />
            </div>

            {/* Content */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900">
                Write The Content
              </label>
              <textarea
                id="content"
                name="content"
                required
                value={formData.content}
                onChange={handleChange}
                className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-[#F9FAFB]"
              ></textarea>
            </div>
            <hr className="border-t-2 border-gray-200 mt-8" />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pr-4">
            <button
              type="submit"
              className="bg-[#F5705E] hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg mb-12"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNotification;
