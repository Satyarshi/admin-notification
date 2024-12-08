import React, { useState, useEffect } from "react";
import image from "../../assets/notify.svg";
import image2 from "../../assets/trash-empty.svg";
import image3 from "../../assets/sort.svg";
import axios from "axios";

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("farmers");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      setError(null);
      setNotifications([]);

      try {
        const response = await axios.get(
          `http://localhost:3000/api/notifications/get-notifi?recipientType=${activeTab.toLowerCase()}`
        );
        if (response.status != 404) {
          setNotifications(response.data.data);
        } else {
          setError("No notifications found.");
        }
      } catch (error) {
        setError("Error fetching notifications.");
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [activeTab]);

  return (
    <div>
      <div className="w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
        <p className="text-2xl font-semibold m-4 pl-4">Manage Notifications</p>
        <div>
          <hr className="border-t-2 border-gray-200" />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-10 border-b-[1px] mb-4">
            <button
              className={`w-20 pb-4 ${
                activeTab === "Panchayat"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-[#89888E]"
              }`}
              onClick={() => setActiveTab("Panchayat")}>
              Panchayat
            </button>
            <button
              className={`w-32 pb-4 ${
                activeTab === "Govt officials"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-[#89888E]"
              }`}
              onClick={() => setActiveTab("Govt officials")}>
              Govt officials
            </button>
            <button
              className={`w-20 pb-4 ${
                activeTab === "farmers"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-[#89888E]"
              }`}
              onClick={() => setActiveTab("farmers")}>
              Farmers
            </button>
          </div>

          <div className="mb-4">
            <div className="text-lg text-[#89888E] font-poppins flex items-center gap-2 my-8">
              <div className="bg-[#EDEDED]">
                <img src={image} alt="notify" />
              </div>
              <span className="font-semibold text-[#191632] text-3xl">
                {notifications.length}
              </span>
              <span>notifications</span>
            </div>
          </div>

          {loading && (
            <div className="text-center py-4 text-gray-500">
              <p>Loading notifications...</p>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-4 text-red-500">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-[#F8F8F8] p-4 rounded-md shadow-sm w-full">
                <div className="flex items-center gap-4 w-full">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-500"
                  />
                  <div className="w-full flex items-center gap-16">
                    <span className="text-[#89888E] text-sm w-44 flex items-center">
                      TITLE <img src={image3} alt="" />
                    </span>
                    <span className="text-sm text-[#89888E] flex items-center">
                      NOTIFICATION <img src={image3} alt="" />
                    </span>
                  </div>
                </div>
              </div>
              {notifications.map((notification, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center p-4 rounded-md w-full mb-3">
                    <div className="flex items-center gap-4 w-full">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-red-500"
                      />
                      <div className="w-full flex items-center gap-16">
                        <span className="font-semibold text-sm w-44">
                          {notification.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {notification.message.length > 30
                            ? `${notification.message.substring(0, 40)}...`
                            : notification.message}
                        </span>
                      </div>
                    </div>
                    <button className="text-red-500">
                      <img src={image2} alt="delete" className="h-6 w-6" />
                    </button>
                  </div>
                  <div>
                    <hr className="border-t-2 border-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
