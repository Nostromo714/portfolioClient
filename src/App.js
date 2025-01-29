// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Import the global styles


// Import your pages
import HomePage from './pages/home';  // This will work with default export

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;