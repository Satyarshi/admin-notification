import React, { useState, useEffect } from "react";
import NotificationManage from "../components/Notification/NotificationManage";
import NotificationPage from "../components/Notification/NotificationPage";
import CreateNotification from "../components/CreateNotification";
import SuccessModal from "../components/SuccessModal";

const Notification = () => {
  const [activeComponent, setActiveComponent] = useState("CreateNotification");
  const [showModal, setShowModal] = useState(false);
  const showSuccessModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <NotificationManage setActiveComponent={setActiveComponent} />
      <div>
        {activeComponent === "CreateNotification" ? (
          <CreateNotification showSuccessModal={showSuccessModal} />
        ) : (
          <NotificationPage />
        )}
      </div>
      <SuccessModal showModal={showModal} onClose={closeModal} />
    </>
  );
};

export default Notification;
