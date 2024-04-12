import React from 'react';
import { Box, Heading, Text, ChakraProvider, extendTheme } from '@chakra-ui/react';

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Home: React.FC = () => {
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
          Welcome to TradingBot
        </Heading>
        <Text>
          This website will show you an overview on your MetaTrader5
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
