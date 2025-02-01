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

const App = () => {
  return (
    <>
      <Routes>
        {/* Default page is Verify */}
        <Route path="/" element={<Verify />} />
        
        {/* Admin Dashboard Route */}
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Notification />} />
          <Route path="cycle" element={<Cycle />} />
          <Route path="database" element={<Database />} />
          <Route path="user-verification" element={<UserVerification />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
