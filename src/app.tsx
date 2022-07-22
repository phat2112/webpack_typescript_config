import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web1 from "./screens/web1";
import Web2 from "./screens/web2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web1 />} />
        <Route path="/web2" element={<Web2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
