import React, { useState } from "react";
import image from "../assets/document-upload.svg";
import axios from "axios";

const CreateNotification = ({ showSuccessModal }) => {
  const [formData, setFormData] = useState({
    recipientType: "",
    title: "",
    body: "",
    userID: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendClick = async (e) => {
    e.preventDefault();
    let { recipientType, title, body, userID } = formData;
    console.log(formData);
    recipientType = recipientType.toLowerCase();

    if (!recipientType || !title || !body) {
      alert("Please fill in all required fields.");
      return;
    }

    // ----------------------------- send notification
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/notifications/send-notification",
        {
          recipientType,
          title,
          body,
        }
      );

      // On success
      if (response.status === 200) {
        showSuccessModal();
      } else {
        console.error("Failed to send notification", response.data.message);
        alert("Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      alert("Error sending notification");
    }

    // ------------------------- create notification
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/notifications",
        {
          recipientType,
          title,
          message: body,
          userID,
        }
      );

      console.log({
        recipientType,
        title,
        message: body,
        userID,
      });

      // On success
      if (response.status === 201) {
        showSuccessModal();
      } else {
        console.error("Failed to save notification", response.data.message);
      }
    } catch (error) {
      console.error("Error saving notification:", error);
      alert("Error saving notification");
    }
  };

  return (
    <>
      <form>
        <div className="w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
          <p className="text-2xl font-bold m-4 pl-4">Create New Notification</p>

          <div>
            <hr className="border-t-2 border-gray-200" />
          </div>

          <div className="p-8 pr-32">
            <p className="text-lg font-bold mb-6">Notification Form</p>

            <div className="mb-8">
              <hr className="border-t-2 border-gray-200" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Send Notification to <span style={{ color: "red" }}>*</span>
              </label>
              <select
                id="notificationTo"
                name="recipientType"
                value={formData.recipientType}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 p-3 text-sm mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]">
                <option value="">Select Recipient</option>
                <option value="Farmers">Farmers</option>
                <option value="Panchayat">Panchayat</option>
                <option value="Official">Official</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="blockCode"
                className="block text-sm font-medium leading-6 text-gray-900">
                Block Code
              </label>
              <input
                id="blockCode"
                name="blockCode"
                type="text"
                required
                className="block w-[50%] rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
              />
            </div>

            <div className="flex items-center gap-4 justify-between mb-9">
              <div className="w-[50%]">
                <label
                  htmlFor="userID"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  User ID
                </label>
                <input
                  id="userID"
                  name="userID"
                  type="text"
                  value={formData.userID}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
                />
              </div>
              <p className="mt-5 text-xl font-semibold">or</p>
              <div className="flex items-center mt-8">
                <button
                  type="button"
                  className="bg-[#F9FAFB] hover:bg-gray-300 text-[#F5705E] py-2 px-4 rounded-lg shadow-sm ring-1 ring-gray-300 flex items-center gap-1">
                  <img src={image} alt="upload" style={{ width: "18%" }} />
                  Bulk Upload
                </button>
              </div>
            </div>
            <div>
              <hr className="border-t-2 border-gray-200 mb-5" />
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="body"
                className="block text-sm font-medium leading-6 text-gray-900">
                Write The body
              </label>
              <textarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"></textarea>
            </div>
            <div>
              <hr className="border-t-2 border-gray-200 mt-8" />
            </div>
          </div>

          <div className="flex justify-end pr-20">
            <button
              type="submit"
              className="mt-5 bg-[#F5705E] hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg mb-12"
              onClick={handleSendClick}>
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNotification;
