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
  Flex,
  Text,
} from '@chakra-ui/react';
import { signUp, resendSignUpCode } from 'aws-amplify/auth'; 
import { useNavigate, Link } from 'react-router-dom';
import { confirmSignUp } from 'aws-amplify/auth';
import { autoSignIn } from 'aws-amplify/auth';

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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = React.useState('');
  const [isConfirmationStep, setIsConfirmationStep] = React.useState(false);
  const navigate = useNavigate(); 

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Attempting sign up with email:', email, 'and password:', password);
      await signUp({
        username: email,
        password: password,
      });
      console.log('Signup successful');
      setIsConfirmationStep(true);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleConfirmation = async () => {
    try {
      console.log('Confirming sign up with username:', email, 'and confirmation code:', confirmationCode);
      console.log('Values before confirmation', username, confirmationCode); 
      await confirmSignUp({
        username,
        confirmationCode,
      });
      console.log('Confirmation successful');
      await handleAutoSignIn();
      await navigate('/home'); 
      console.log('Sign up confirmed for user:', email);
      setIsConfirmationStep(false);
    } catch (error: any) {
      console.error('Error confirming sign up:', error);
      console.error('Confirmation details: ', username, confirmationCode); 
    }
  };

  async function handleAutoSignIn() {
    try {
      console.log('Attempting auto sign-in');
      await autoSignIn();
      console.log('Auto sign-in successful'); 
    } catch (error) {
      console.error('Auto sign-in error:', error);
    }
  }

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
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  placeholder="Enter confirmation code"
                  mb={4}
                  bg="gray.600" 
                  color="white"
                />
              </FormControl>
              <Button colorScheme="green" onClick={handleConfirmation}>
                Confirm Signup
              </Button>
            </>
          ) : (
            <>
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
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  mb={4}
                  bg="gray.600" 
                  color="white" 
                />
              </FormControl>
              <Button mt={5} colorScheme="green" onClick={handleSignup} width="100%">
                Signup
              </Button>
            </>
          )}

          {/* Back to Login Link */}
          <Flex justifyContent="center" mt={4}>
            <Text fontSize="xs">
              Already have an account? {' '}
              <Link to="/login">
                <strong>Back to Login</strong> 
              </Link>
            </Text>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Signup;