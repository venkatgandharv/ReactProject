import React from "react";
import { useNavigate } from "react-router-dom";

export function FirstPage() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/secondPage");
  };

  return (
    <>
      <button onClick={nextPage}> Go to Second Page</button>
    </>
  );
}
