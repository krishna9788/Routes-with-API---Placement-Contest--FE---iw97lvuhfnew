import React from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Top from "./Top";
import Contact from "./Contact";

const App = () => {
  return (
    <div id="main">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-10" element={<Top />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
