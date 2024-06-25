import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserSignup } from "./UserSignup";

const UnauthenticatedApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<UserSignup />} />
      </Routes>
    </div>
  );
};

export default UnauthenticatedApp;
