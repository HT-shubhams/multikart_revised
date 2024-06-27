import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Dashboard from "./Dashboad";

const AuthenticatedApp = () => {
  return (
    <div className="font-poppins">
      <Sidebar />
      <div className="hidden md:ml-64 md:block">
        <Header />
      </div>
      <div className="md:ml-64">
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:userId" element={<EditUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
