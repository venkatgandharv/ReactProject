import React, { useState } from "react";
import "../styles/homePage.css";
import { Logout } from "./Logout";
import Header from "../Header";
// import { useNavigate, useLocation } from "react-router-dom";

function HomePage(props) {
  const [participantName, setPartcipantName] = useState("");
  const [particpantsList, setParticipantsList] = useState([]);
  // const navigate = useNavigate();
  // const location = useLocation(props);
  // const state = location?.state;

  const handleInputChange = (e) => {
    setPartcipantName(e.target.value);
  };

  const handleSubmit = () => {
    if (participantName.trim() !== "") {
      setParticipantsList([...particpantsList, participantName]);

      setPartcipantName("");
    }

    // navigate("/login");
  };

  return (
    <>
    <Header/>
      <div className="form">
        <form
          className="login-form home-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="login-items">
            <input
              type="text"
              value={participantName}
              className="label-item"
              placeholder="Enter participant name"
              onChange={handleInputChange}
            ></input>
          </div>

          <button className="btn-add" onClick={handleSubmit}>
            Add Participant
          </button>
          <div className="login-items">
            <header className=""> New Partcipants</header>
          </div>
          <div className="login-items">
            <ui>
              {particpantsList.map((participant, index) => (
                <li key={index}>{participant}</li>
              ))}
            </ui>
          </div>
        </form>
      </div>
    </>
  );
}
export default HomePage;
