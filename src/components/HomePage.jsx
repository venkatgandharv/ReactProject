import React, { useState } from "react";
import "../styles/homePage.css";
import Header from "./Header";
import Footer from "./Footer";

function HomePage({ loggedIn, onLogout }) {
  const [participantName, setPartcipantName] = useState("");
  const [particpantsList, setParticipantsList] = useState([]);

  const handleInputChange = (e) => {
    setPartcipantName(e.target.value);
  };

  const handleSubmit = () => {
    if (participantName.trim() !== "") {
      setParticipantsList([...particpantsList, participantName]);

      setPartcipantName("");
    }
  };

  return (
    <>
      <Header onLogout={onLogout} loggedIn={loggedIn} />
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
      <Footer />
    </>
  );
}
export default HomePage;
