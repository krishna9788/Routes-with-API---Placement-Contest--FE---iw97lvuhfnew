import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/top" element={<Top />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
