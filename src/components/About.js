// src/components/About.js

import React from 'react';
import './About.css'; // Import your CSS file
import headerImage from '../images/header-about-image.jpg'; // Adjust the path as necessary

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <img src={headerImage} alt="About Us Header" className="header-image" />
      </header>
      <h1>About Us</h1>
      <p>"It's not wise to violate rules until you know how to observe them."</p>
        <p>Jam3 is one of the world's top digital production and design agencies. We specialize in creating highly advanced, experiential works in both the advertising and entertainment industries.</p>
        <p>We're known for challenging the way digital stories are told. Our work often incorporates everything from live action, animation and sound design to coded particle systems and complex 3D engines. If it is possible, Jam3 can do it.</p>
    </div>
  );
};

export default About;