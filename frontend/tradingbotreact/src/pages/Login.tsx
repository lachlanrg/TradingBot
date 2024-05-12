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
  Flex,
  Text,
} from '@chakra-ui/react';
import { signIn, signOut } from 'aws-amplify/auth';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); 
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      await signIn({ username: email, password: password });
      console.log('Login successful with email:', email);
      onLogin();
      navigate('/home'); 
      setLoginError(''); // Clear any previous error
    } catch (error: any) { // Type assertion for error
      console.error('Error signing in:', error);
      if (error.code === 'UserNotFoundException') {
        setLoginError('User not found.');
      } else if (error.code === 'NotAuthorizedException') {
        setLoginError('Incorrect username or password.');
      } else {
        setLoginError('An error occurred during login. Please try again.');
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log('Sign Out successful');

      // Redirect or perform any additional actions after signout
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh" 
        bg="gray.800" 
        color="white" 
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="350px" 
          mx="auto"
          p={8}
          borderWidth="1px"
          borderRadius="lg"
          bg="gray.700"
        >
          <Flex justifyContent="flex-end" mb={4} position="absolute" top={0} right={0}>
            <Button variant="link" onClick={handleSignOut}>Sign Out</Button>
          </Flex>
          <Heading as="h1" mb={4}>
            Login
          </Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              mb={4}
              bg="gray.600"
              color="white" 
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
              bg="gray.600" 
              color="white" 
            />
          </FormControl>
          {loginError && ( 
            <Text color="red.500" mb={4}>{loginError}</Text>
          )}
          <Button mt={5} colorScheme="blue" onClick={handleLogin} width="100%">
            Login
          </Button>
          <Flex justifyContent="center" mt={4}>            
            <Text fontSize="xs" >              
              Need an account? <Link to="/signup"><b>Sign Up</b></Link>            
            </Text>          
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Login;