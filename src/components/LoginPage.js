import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // You can add authentication logic here
    // For now, just log the credentials and navigate to the home page
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to the home page
    navigate("/homePage");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
