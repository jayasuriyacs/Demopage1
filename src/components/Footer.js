// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Optional: Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Yugan Industries. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@yuganindustries.com">info@yuganindustries.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;