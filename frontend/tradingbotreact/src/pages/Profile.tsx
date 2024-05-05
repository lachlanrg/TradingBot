import React from 'react';
import { Box, Heading, Text, ChakraProvider, extendTheme, Button } from '@chakra-ui/react';
import { signOut, getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Profile: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const navigate = useNavigate(); // Declare the navigate function
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = React.useState<any>(null);
  const [email, setEmail] = React.useState<string | null>(null);


  React.useEffect(() => {
    currentAuthenticatedUser();
    UserAttributes();
  }, []);

  async function currentAuthenticatedUser() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);

      setUserInfo({ username, userId, signInDetails });
    } catch (err) {
      console.log(err);
    }
  }

  const UserAttributes = async () => {
    try {
      const userAttributes = await fetchUserAttributes();
      if (userAttributes.email) {
        setEmail(userAttributes.email);
      } else {
        console.log('Email attribute is undefined');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      onLogout(); // Call the onLogout function to update the loggedIn state
      navigate('/login')
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh" // Set the minimum height of the box to the height of the viewport
        bg="gray.800" // Set the background color to a dark shade
        color="white" // Set the text color to white
        display="flex"
        flexDirection="column"
        alignItems="center"
        // justifyContent="center"
        p={8}
      >
        <Heading as="h1" mb={4} mt={200}>
          Profile
        </Heading>
        {userInfo && (
        <Box>
          <Text>User ID: {userInfo.userId}</Text>
          <Text>Sign In Details: {JSON.stringify(userInfo.signInDetails)}</Text>
          {email && <Text>Email: {email}</Text>}
        </Box>
      )}
        <Button mt={4} onClick={handleSignOut}>
          Sign Out
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default Profile;
