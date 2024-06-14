import React from "react";
import "./tailwind.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="font-poppins">
      <Sidebar />
      <div className="hidden md:block md:ml-64">
        <Header />
      </div>
      <div className="md:ml-64">
        <UserList />
      </div>
    </div>
  );
};

export default App;
