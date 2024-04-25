import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateFood from "./pages/CreateFood";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateFood />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
