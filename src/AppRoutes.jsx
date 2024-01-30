import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
