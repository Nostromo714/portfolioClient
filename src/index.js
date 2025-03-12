import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import path
import './styles/tailwind.css'; 
import App from './App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root using React 18
root.render(  // Use root.render instead of ReactDOM.render
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
