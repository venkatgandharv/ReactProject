import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);

      navigate("/login");
    }
  }, [initialLoad, navigate]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
