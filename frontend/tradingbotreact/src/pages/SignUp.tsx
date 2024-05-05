// SignUp.tsx
import React, { useState } from 'react';
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
import { signUp, signIn, resendSignUpCode } from 'aws-amplify/auth'; // Import Auth from aws-amplify
import { useNavigate } from 'react-router-dom';
import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';
import { autoSignIn } from 'aws-amplify/auth';


import { Link } from 'react-router-dom';

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});


const Signup: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = React.useState('');
  const [isConfirmationStep, setIsConfirmationStep] = React.useState(false);
  const navigate = useNavigate(); // Declare the navigate function


  const handleSignup = async () => {
    try {
      console.log('Attempting sign up with email:', email, 'and password:', password);
      await signUp({
        username: email,
        password: password,
      });
      console.log('Signup successful. User:', email); // Log the username
      setIsConfirmationStep(true); 
    } catch (error) {
      console.error('Error signing up:', error);
      console.error('Signup details: ', email, password); // Log signup details for analysis
    }
  };


  const handleConfirmation = async () => {
    try {
      console.log('Confirming sign up with username:', email, 'and confirmation code:', confirmationCode);
      console.log('Values before confirmation', username, confirmationCode); // Check values

      await confirmSignUp({
        username,
        confirmationCode, 
      });

      console.log('Confirmation successful'); // Indicate success

      await handleAutoSignIn();
      await navigate('/home'); 

      console.log('Sign up confirmed for user:', email); 
      setIsConfirmationStep(false); 
    } catch (error: any) {
      console.error('Error confirming sign up:', error);
      console.error('Confirmation details: ', username, confirmationCode); // Log confirmation details
    }
  };

  async function handleAutoSignIn() {
    try {
      console.log('Attempting auto sign-in');
      await autoSignIn();
      console.log('Auto sign-in successful'); // Indicate success
    } catch (error) {
      console.error('Auto sign-in error:', error);
    }
  }

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
            Signup
          </Heading>
          {isConfirmationStep ? (
            <>
              <FormControl>
                <FormLabel>Confirmation Code</FormLabel>
                <Input
                  type="text"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)} // Correct
                  placeholder="Enter confirmation code"
                  mb={4}
                  bg="gray.600" // Set the background color of the input to a darker shade
                  color="white" // Set the text color of the input to white
                />
              </FormControl>
              <Button colorScheme="green" onClick={handleConfirmation}>
                Confirm Signup
              </Button>
            </>
          ) : (
            <>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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
              <Button colorScheme="green" onClick={handleSignup}>
                Signup
              </Button>
            </>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Signup;