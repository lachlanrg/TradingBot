import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

interface LoginProps {
  onLogin: () => void;
  
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Declare the navigate function


  const handleLogin = () => {
    // Perform login logic here, such as validating the username and password
    // For simplicity, always consider login successful for this example
    onLogin();
    navigate('/home'); // Navigate to the home page

  };


  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh" // Set the minimum height of the box to the height of the viewport
        bg="gray.800" // Set the background color to a dark shade
        color="white" // Set the text color to white
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="350px" // Set the maximum width of the box
          mx="auto"
          p={8}
          borderWidth="1px"
          borderRadius="lg"
          bg="gray.700" // Set the background color of the login box to a darker shade
        >
          <Heading as="h1" mb={4}>
            Login
          </Heading>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              mb={4}
              bg="gray.600" // Set the background color of the input to a darker shade
              color="white" // Set the text color of the input to white
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              mb={4}
              bg="gray.600" // Set the background color of the input to a darker shade
              color="white" // Set the text color of the input to white
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin} mr={2}>
            Login
          </Button>
          <Link to="/signup">
            <Button colorScheme="green" ml={2}>
              Signup
            </Button>
          </Link>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
