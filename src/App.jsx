import React from "react";
import "./tailwind.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <Router>
      <div className="font-poppins">
        <Sidebar />
        <div className="hidden md:block md:ml-64">
          <Header />
        </div>
        <div className="md:ml-64">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:userId" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
