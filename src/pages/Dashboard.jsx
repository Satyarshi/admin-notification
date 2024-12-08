import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NotificationPage from "../components/Notification/NotificationPage";
import CreateNotification from "../components/CreateNotification";
import NotificationManage from "../components/Notification/NotificationManage";
import { Outlet, useNavigate } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";

const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer " + localStorage.getItem("vgfatoken")
);
const baseUrl = "https://vfgabackend.outhad.com/api/";

function Dashboard() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
    fetchData();
  }, []);

  const checkLogin = async () => {
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(baseUrl + "auth/official/me", requestOptions);
    if (response.status === 401) navigate("/login");
    const res = await response.json();
    setEmail(res.message.email);
  };

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(baseUrl + "forms/all", requestOptions);
    const res = await response.json();
    if (response.status === 401) navigate("/login");
    console.log(res.forms);
  };

  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar setExpand={setSideMenuIsExpand} email={email} />
      <div
        className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}>
        <Navbar />

        <div className="flex min-h-screen p-8 bg-[#FEFAF6]">
          <div className="flex min-h-full flex-1 flex-col justify-center px-20 py-12 lg:px-[2rem] items-center lg:pl-0">
            <div className="flex min-h-full gap-10">
              <div className="mt-10 sm:mx-auto sm:w-full flex gap-5">
                <Outlet />
              </div>
            </div>
          </div>

          {/* Render either CreateNotification or NotificationPage based on the active component */}
        </div>
      </div>
      {/* <SuccessModal showModal={showModal} onClose={closeModal} /> */}
    </div>
  );
}

export default Dashboard;
