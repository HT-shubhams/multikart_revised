import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserSignup } from "./UserSignup";
import { UserSignin } from "./UserSignin";

const UnauthenticatedApp = ({ setIsAuthenticated }) => {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<UserSignup />} />
        <Route
          path="/sign-in"
          element={<UserSignin setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/" element={<Navigate to="/sign-in" />} />
      </Routes>
    </div>
  );
};

export default UnauthenticatedApp;
