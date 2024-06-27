import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserSignup } from "./UserSignup";
import { UserSignin } from "./UserSignin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UnauthenticatedApp = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/sign-up" element={<UserSignup />} />
        <Route path="/sign-in" element={<UserSignin />} />
      </Routes>
    </div>
  );
};

export default UnauthenticatedApp;
