// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/trading">Trading</Link>
          </li>
          <li>
            <Button variant="link" onClick={handleSignOut}>Logout</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
