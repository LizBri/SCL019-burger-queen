import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tables from "./components/Tables";
import { Cocina } from "./components/Cocina";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Cocina" element={<Cocina />} />
        <Route path="/Mesas" element={<Tables />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
