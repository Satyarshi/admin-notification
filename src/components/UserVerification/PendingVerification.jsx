import React, { useState } from "react";
import sortIcon from "../../assets/sort.svg";
import addUser from "../../assets/add.svg";
import filter from "../../assets/Filter.svg";
import search from "../../assets/search.svg";
import userIcon from "../../assets/notify.svg";
import UserDetailForm from "./UserDetailForm";

const PendingVerification = () => {
  const [activeTab, setActiveTab] = useState("Govt Officials");
  const [selectedUser, setSelectedUser] = useState(null);
  

  const users = [
    {
      name: "Rahul (You)",
      email: "rahul@gmail.com",
      designation: "Admin",
      status: "Pending",
      profilePic: "path/to/image",
      phone: "+91 8373 23** **",
      state: "Uttar Pradesh",
      city: "Agra",
      officeAddress: "Manauri jila kanpur dehat, UP.",
      officeName: "Behariya",
    },
    {
      name: "Raman Sharms",
      email: "raman@gmail.com",
      designation: "Admin",
      status: "Pending",
      profilePic: "path/to/image2",
      phone: "+91 8373 22** **",
      state: "Madhya Pradesh",
      city: "Bhopal",
      officeAddress: "Bhopal main office",
      officeName: "Bhopal",
    },
    {
      name: "Ram Gopal",
      email: "ramg@gmail.com",
      designation: "Admin",
      status: "Pending",
      profilePic: "path/to/image3",
      phone: "+91 8373 22** **",
      state: "Madhya Pradesh",
      city: "Bhopal",
      officeAddress: "Bhopal main office",
      officeName: "Bhopal",
    },
    {
      name: "Aprit Das Gopal",
      email: "arpit@gmail.com",
      designation: "Member",
      status: "Pending",
      profilePic: "path/to/image4",
      phone: "+91 8373 22** **",
      state: "Madhya Pradesh",
      city: "Bhopal",
      officeAddress: "Bhopal main office",
      officeName: "Bhopal",
    },
    {
      name: "Raghu Kishan",
      email: "raghu@gmail.com",
      designation: "Member",
      status: "Pending",
      profilePic: "path/to/image5",
      phone: "+91 8373 22** **",
      state: "Madhya Pradesh",
      city: "Bhopal",
      officeAddress: "Bhopal main office",
      officeName: "Bhopal",
    },
  ];

  return (
    <div>
      <div className="w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
        {/* Title */}
        <p className="text-2xl font-semibold m-4 pl-4">Database</p>
        <hr />

        {/* Tab Navigation */}
        <div className="p-4">
          <div className="flex items-center gap-10 border-b-[1px] mb-4">
            <button
              className={`w-20 pb-4 ${
                activeTab === "Panchayat"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-[#89888E]"
              }`}
              onClick={() => setActiveTab("Panchayat")}
            >
              Panchayat
            </button>
            <button
              className={`w-32 pb-4 ${
                activeTab === "Govt Officials"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-[#89888E]"
              }`}
              onClick={() => setActiveTab("Govt Officials")}
            >
              Govt Officials
            </button>
          </div>

          {/* User Count and Actions */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={userIcon} alt="Users" className="h-6 w-6" />
              <span className="font-semibold text-[#191632] text-3xl">
                {users.length}
              </span>
              <span className="text-lg text-[#89888E]">Users</span>
            </div>

            {/* Filters and Add User */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border rounded-md py-2 px-3 w-60"
                />
                <img
                  src={search}
                  alt="search"
                  className="absolute right-2 top-2.5 h-5 w-5"
                />
              </div>
              <button className="flex items-center text-[#89888E] border-2 border-gray-200 px-3 py-1 rounded-md">
                <img src={filter} alt="filter" className="h-5 w-5 mr-2" />
                Filters
              </button>
              <button className="flex items-center text-white bg-[#F5705E] px-3 py-2 rounded-md">
                <img src={addUser} alt="add user" className="h-5 w-5 mr-2" />
                Add new User
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="flex justify-between items-center bg-[#F8F8F8] p-4 rounded-md shadow-sm w-full">
            <div className="flex items-center gap-4 w-full">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-red-500"
              />
              <div className="w-full flex items-center gap-20">
                <span className="text-[#89888E] text-sm w-48 flex items-center">
                  NAME <img src={sortIcon} alt="sort" className="ml-1" />
                </span>
                <span className="text-sm text-[#89888E] flex items-center w-36">
                  DESIGNATION <img src={sortIcon} alt="sort" className="ml-1" />
                </span>
                <span className="text-sm text-[#89888E] flex items-center">
                  STATUS <img src={sortIcon} alt="sort" className="ml-1" />
                </span>
              </div>
            </div>
          </div>

          {/* User List */}
          <div className="space-y-4 mt-2">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 rounded-md w-full border-b-[1px] border-gray-200"
              >
                <div className="flex items-center w-full">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-500"
                  />
                  <div className="flex items-center gap-8 w-full">
                    <img
                      src={user.profilePic}
                      alt={user.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="font-semibold text-sm w-44">
                      {user.name}
                    </span>
                    <span className="text-sm font-semibold w-52">
                      {user.designation}
                    </span>
                    <span className="text-sm text-red-500 font-semibold">
                      {user.status}
                    </span>
                  </div>
                  <button
                      className="text-blue-500 underline"
                      onClick={() => setSelectedUser(user)}
                    >
                      view
                    </button>
                </div>
              </div>
            ))}
          </div>

          {/* Export Button */}
          <div className="mt-6">
            <button className="text-white bg-[#F5705E] px-4 py-2 rounded-md">
              Export
            </button>
          </div>
        </div>
      </div>
      <UserDetailForm
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default PendingVerification;
