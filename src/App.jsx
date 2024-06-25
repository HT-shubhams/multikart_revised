import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

const App = () => {
  // replace this with actual authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Router>
  );
};

export default App;
