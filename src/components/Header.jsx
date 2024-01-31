import React from "react";
import "../styles/header.css";
import { Logout } from "./Logout";

const Header = ({ loggedIn, onLogout }) => {
  return (
    <>
      <div className="header">
        <div className="center">React Project</div>
        <div className="logout-btn">
          {loggedIn ? <Logout onLogout={onLogout} /> : <></>}
        </div>
      </div>
    </>
  );
};

export default Header;
