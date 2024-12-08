import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Verify from "./pages/Verify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import Cycle from "./pages/Cycle";
import Database from "./pages/Database";
import UserVerification from "./pages/UserVerification";
// import UserPermission from "./components/Notification/UserPermission";
import Notifications from "./components/Notification/Notifications";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Verify />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="notification" element={<Notification />} />
          <Route path="cycle" element={<Cycle />} />
          <Route path="database" element={<Database />} />
          {/* route to gget the fcm token */}
          <Route path="fcmtoken" element={<Notifications />} />
          {/* ------------------------- */}
          <Route path="user-verification" element={<UserVerification />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
