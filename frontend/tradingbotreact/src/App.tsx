import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme, Box, Heading, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Trading from './pages/Trading';
import Signup from './pages/SignUp';
import { useNavigate } from 'react-router-dom';


// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

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

  const handleLogout = () => {
    setLoggedIn(false);
    window.location.href = '/login'; // Redirect to the login page
    // Perform logout logic here, such as clearing session storage
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Box
        bg="gray.800" // Set the background color of the header to a dark shade
        color="white" // Set the text color of the header to white
        p={4} // Set padding for the header
        textAlign="center" // Align text in the header to the center
        borderBottom={loggedIn ? "1px solid #333" : "none"}
        >
        {loggedIn && (
         <header className="App-header">
            <nav className="App-nav">
             <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
                <li style={{ margin: '0 10px' }}>
                  <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <Link to="/trading" className="nav-link">Trading</Link>
                </li>
                <li style={{marginLeft: '20px'}}>
                  <Button variant="link" onClick={handleLogout} className="logout-button">
                    Logout
                  </Button>
                </li>
              </ul>
              
              
            </nav>
          </header>
        )}
      </Box>
        
      <main className="App-main">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </main>

      </Router>
    </ChakraProvider>
  );
}

export default App;
