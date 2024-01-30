import React from "react";
import "./header.css";
import { Logout } from "./components/Logout";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <div>
      <div className="header"> React Project </div>
      {isAuthenticated && (
        <div>
          <Logout setIsAuthenticated={setIsAuthenticated} />
        </div>
      )}
    </div>
  );
};

export default Header;
