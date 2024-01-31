import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
// import { FirstPage } from "./components/FirstPage";
// import { SecondPage } from "./components/SecondPage";

function AppRoutes(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={<HomePage loggedIn={loggedIn} onLogout={handleLogout} />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
