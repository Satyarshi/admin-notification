import React, { useState } from "react";
import CycleManage from "../components/Cycle/CycleManage";
import AddCycle from "../components/Cycle/AddCycle";
import ManageCycles from "../components/Cycle/ManageCycles";
import SuccessModal from "../components/SuccessModal";
import { CSSTransition } from "react-transition-group";

const Cycle = () => {
  const [activeComponent, setActiveComponent] = useState("AddNewCycle");
  const [showModal, setShowModal] = useState(false);
  const showSuccessModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CycleManage setActiveComponent={setActiveComponent} />
      <div className="component-container">
        <CSSTransition
          in={activeComponent === "AddNewCycle"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <AddCycle showSuccessModal={showSuccessModal} />
        </CSSTransition>
        <CSSTransition
          in={activeComponent === "ManageCycles"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <ManageCycles />
        </CSSTransition>
      </div>
      <SuccessModal
        showModal={showModal}
        onClose={closeModal}
        title={"Cycle Added Successfully"}
        description={"New Cycle has been added"}
      />
    </>
  );
};

export default Cycle;
