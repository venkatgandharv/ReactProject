import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FirstPage } from "./components/FirstPage";
import { SecondPage } from "./components/SecondPage";
import AppRoutes from "./AppRoutes";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  // const [initialLoad, setInitialLoad] = useState(true);

  // useEffect(() => {
  //   if (initialLoad) {
  //     setInitialLoad(false);

  //     navigate("/login");
  //   }
  // }, [initialLoad, navigate]);

  return (
    <>
    <AppRoutes/>
    </>
    
  );
}

export default App;
