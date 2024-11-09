// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Import NavLink here
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Your existing CSS for the App

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <h3 className="company-name">Yugan Industries</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Add the Footer here */}
      </div>
    </Router>
  );
};

export default App;