import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {

  return (
    <div id="main">
      <Navbar />
      <div className='container'></div>
    </div>
  )
}


export default App;
