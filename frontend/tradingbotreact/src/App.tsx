import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Trading from './pages/Trading';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {loggedIn && (
        <header className="App-header">
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li>
                <Link to="/Trading" className="nav-link">Trading</Link>
              </li>
              {/* <button onClick={toggleDarkMode} className="dark-mode-toggle">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button> */}
            </ul>
          </nav>
        </header>
      )}
        {loggedIn ? (
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/trading" element={<Trading />} />
            </Routes>
          </main>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
