import React from "react";
import { useNavigate } from "react-router-dom";

const Web2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Web2</h1>
      <button onClick={() => navigate("/", { replace: true })}>
        back to web1
      </button>
    </div>
  );
};

export default Web2;
