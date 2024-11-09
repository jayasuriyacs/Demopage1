import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for React 18 and above
import App from './App'; // Importing the main App component
import './index.css'; // Importing global styles (if you have any)
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root for rendering
root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);