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

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Perform signup logic');
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
            Signup
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
          <Button colorScheme="green" onClick={handleSignup}>
            Signup
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Signup;
