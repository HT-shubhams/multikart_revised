import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ToastContainer />
      {isAuthenticated ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp setIsAuthenticated={setIsAuthenticated} />
      )}
    </Router>
  );
};

export default App;
