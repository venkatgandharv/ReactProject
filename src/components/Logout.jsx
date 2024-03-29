import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

export const Logout = ({ onLogout }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    onLogout();
  };
  return (
    <>
      <div classname="logout-container">
        <button classname="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};
