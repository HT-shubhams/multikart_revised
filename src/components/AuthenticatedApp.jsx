import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Dashboard from "./Dashboad";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthenticatedApp = () => {
  return (
    <div className="font-poppins">
      <Sidebar />
      <div className="hidden md:ml-64 md:block">
        <Header />
      </div>
      <div className="md:ml-64">
        <ToastContainer />
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:userId" element={<EditUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
