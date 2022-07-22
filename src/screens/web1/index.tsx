import React from "react";
import { useNavigate } from "react-router-dom";

const Web1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Web1</h1>
      <button onClick={() => navigate("/web2", { replace: true })}>
        navigate to web2
      </button>
    </div>
  );
};

export default Web1;
