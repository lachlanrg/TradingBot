import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


import Home from './pages/Home';
import Profile from './pages/Profile';
import Trading from './pages/Trading';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <header className="App-header">
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li>
                <Link to="/Trading" className="nav-link">Trading</Link>
              </li>
              <button onClick={toggleDarkMode} className="dark-mode-toggle">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Trading" element={<Trading />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
