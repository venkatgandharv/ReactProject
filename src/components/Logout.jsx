import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

export const Logout = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsAuthenticated(false);
    // navigate("/login");
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
  }
