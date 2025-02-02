import React, { useState } from "react";
import { Transition } from "@headlessui/react"; // For smooth transitions
import image from "../../assets/notify.svg";
import image2 from "../../assets/trash-empty.svg";
import image3 from "../../assets/sort.svg";
import DeleteModal from "../DeleteModal";

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("Farmer");
  const [showModal, setShowModal] = useState(false);

  // Notification data with unique IDs
  const [notificationsData, setNotificationsData] = useState({
    Panchayat: [
      {
        id: "1",
        title: "Meeting Scheduled",
        content: "Panchayat meeting is on 25th Sept.",
      },
      {
        id: "2",
        title: "Development Updates",
        content: "New roads construction started.",
      },
      {
        id: "3",
        title: "Fund Allocation",
        content: "Funds allocated for education.",
      },
    ],
    "Govt Officials": [
      {
        id: "4",
        title: "Policy Update",
        content: "New agricultural policies announced.",
      },
      {
        id: "5",
        title: "Data Submission",
        content: "Submit quarterly reports by 30th.",
      },
      {
        id: "6",
        title: "Emergency Meeting",
        content: "All officials must attend the meeting.",
      },
    ],
    Farmer: [
      {
        id: "7",
        title: "Fertilizer Subsidy",
        content: "Apply for fertilizer subsidy online.",
      },
      {
        id: "8",
        title: "Crop Insurance",
        content: "Insurance deadline extended to 15th.",
      },
      {
        id: "9",
        title: "Weather Alert",
        content: "Heavy rain expected in your region.",
      },
    ],
  });

  // Track selected notifications for each tab
  const [selectedNotifications, setSelectedNotifications] = useState({
    Panchayat: [],
    "Govt Officials": [],
    Farmer: [],
  });

  const notifications = notificationsData[activeTab];

  // Toggle select all checkboxes for the active tab
  const toggleSelectAll = () => {
    if (selectedNotifications[activeTab].length === notifications.length) {
      setSelectedNotifications((prev) => ({ ...prev, [activeTab]: [] }));
    } else {
      setSelectedNotifications((prev) => ({
        ...prev,
        [activeTab]: notifications.map((notification) => notification.id),
      }));
    }
  };

  // Toggle a single notification checkbox
  const toggleCheckbox = (id) => {
    setSelectedNotifications((prev) => {
      const isSelected = prev[activeTab].includes(id);
      return {
        ...prev,
        [activeTab]: isSelected
          ? prev[activeTab].filter((itemId) => itemId !== id)
          : [...prev[activeTab], id],
      };
    });
  };

  const openDeleteModal = () => {
    if (selectedNotifications[activeTab].length > 0) {
      setShowModal(true);
    }
  };

  const handleDelete = () => {
    // Remove selected notifications by ID from the active tab
    const newNotificationsData = { ...notificationsData };
    newNotificationsData[activeTab] = newNotificationsData[activeTab].filter(
      (notification) =>
        !selectedNotifications[activeTab].includes(notification.id)
    );

    // Update the state
    setNotificationsData(newNotificationsData);

    setSelectedNotifications((prev) => ({
      ...prev,
      [activeTab]: [], // Reset selected notifications for the active tab
    }));

    setShowModal(false);
  };

  return (
    <>
      <div className="w-full md:w-[82vw] lg:w-[62vw] xl:w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
        {/* Title */}
        <p className="text-2xl font-bold m-4 pl-4">Manage Notifications</p>
        <hr className="border-t-2 border-gray-200" />

        <div className="p-8">
          {/* Tabs */}
          <div className="flex items-center gap-10 border-b-[1px] mb-4">
            {["Panchayat", "Govt Officials", "Farmer"].map((tab) => (
              <button
                key={tab}
                className={`w-32 pb-4 transition-all duration-300 ${
                  activeTab === tab
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#89888E]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Notification Count */}
          <div
            className="text-lg text-[#89888E] font-poppins flex items-center gap-2 my-8 cursor-pointer"
            onClick={toggleSelectAll}
          >
            <div className="bg-[#EDEDED]">
              <img src={image} alt="notify" />
            </div>
            <span className="font-semibold text-[#191632] text-3xl">
              {notifications.length}
            </span>
            <span>notifications</span>
          </div>

          <Transition
            key={activeTab}
            appear
            show
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="space-y-4">
              {/* Header Row */}
              <div className="flex justify-between items-center bg-[#F8F8F8] p-4 rounded-md shadow-sm w-full">
                <div className="flex items-center gap-4 w-full">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-500"
                    checked={
                      selectedNotifications[activeTab].length ===
                      notifications.length
                    }
                    onChange={toggleSelectAll}
                  />
                  <div className="w-full flex items-center gap-16">
                    <span className="text-[#89888E] text-sm w-44 flex items-center">
                      TITLE <img src={image3} alt="sort" />
                    </span>
                    <span className="text-sm text-[#89888E] flex items-center">
                      NOTIFICATION <img src={image3} alt="sort" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Notification Items */}
              {notifications.map((notification) => (
                <div key={notification.id}>
                  <div className="flex justify-between items-center p-4 rounded-md w-full mb-3">
                    <div className="flex items-center gap-4 w-full">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-red-500"
                        checked={selectedNotifications[activeTab].includes(
                          notification.id
                        )}
                        onChange={() => toggleCheckbox(notification.id)}
                      />
                      <div className="w-full flex items-center gap-16">
                        <span className="font-semibold text-sm w-44">
                          {notification.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {notification.content.length > 30
                            ? `${notification.content.substring(0, 40)}...`
                            : notification.content}
                        </span>
                      </div>
                    </div>
                    <button
                      className="text-red-500 ml-10"
                      onClick={openDeleteModal}
                    >
                      <img src={image2} alt="delete" className="h-6 w-6" />
                    </button>
                  </div>
                  <hr className="border-t-2 border-gray-200" />
                </div>
              ))}
            </div>
          </Transition>
        </div>
        {/* Delete Selected Button */}
        {selectedNotifications[activeTab].length > 0 && (
          <div className="p-8">
            <button
              onClick={openDeleteModal}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete Selected Notifications
            </button>
          </div>
        )}
      </div>
      <DeleteModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title={"Delete Notifications"}
        description={
          "Are you sure you want to delete the selected notifications ?"
        }
      />
    </>
  );
};

export default NotificationPage;
