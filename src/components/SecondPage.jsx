import React from "react";
import { useNavigate } from "react-router-dom";

export function SecondPage() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={nextPage}> Back to First Page</button>
    </>
  );
}
