import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  console.log("hello");
  console.log("Email:", email);
  console.log("Password:", password);

  const handleSubmit = () => {
    if (email === "bannu45t@icloud.com" && password === "Rohitsharma@45") {
      navigate("/home", { state: { email, password } });
      onLogin();
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="form">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-items">
            <header className="title-login">Log In</header>
          </div>

          <div className="login-items">
            <label className="label-item email"> Email : </label>
            <input
              className="input-item"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-items">
            <label className="label-item password"> Password : </label>
            <input
              className="input-item"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};
export default LoginPage;
