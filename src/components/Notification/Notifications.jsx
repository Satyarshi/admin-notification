import React, { useEffect, useState } from "react";
import { messaging } from "../../firebase";
import { getToken } from "firebase/messaging";
import axios from "axios";

const Notifications = () => {
  const [fcmtoken, setFCM] = useState(null);

  const updateFCMToken = async (userId, fcmToken, userType) => {
    try {
      const response = await axios.post(
        `127.0.0.1:3000/api/notification/update-fcm-token`,
        {
          userId,
          fcmToken,
          userType,
        }
      );
      console.log("FCM Token updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error updating FCM token:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      alert("permission granted");
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BFke_b3UsV3k56a7II5jgGtAZpBi7CpWE2Dq7xOlhhyIG6MoeD4WytLXKHlSZrDZBpQSokRUNV5rPJ59dtEC0cI",
      });
      setFCM(token);
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return <h1>notification fcm token fetch {fcmtoken}</h1>;
};

export default Notifications;
