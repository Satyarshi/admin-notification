import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import NotificationManage from "../components/Notification/NotificationManage";
import NotificationPage from "../components/Notification/NotificationPage";
import CreateNotification from "../components/Notification/CreateNotification";
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
      
      <div className="component-container">
        <CSSTransition
          in={activeComponent === "CreateNotification"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <CreateNotification showSuccessModal={showSuccessModal} />
        </CSSTransition>

        <CSSTransition
          in={activeComponent === "ManageNotification"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <NotificationPage />
        </CSSTransition>
      </div>

      <SuccessModal showModal={showModal} onClose={closeModal} />
    </>
  );
};

export default Notification;
