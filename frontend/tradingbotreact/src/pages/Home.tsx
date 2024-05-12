import React, { useEffect, useRef } from 'react';
import { Box, Heading, Text, ChakraProvider, extendTheme } from '@chakra-ui/react';

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Home: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically create and insert the script tag 
    const script = document.createElement('script');
    script.src = 'https://metatraderweb.app/trade/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Wait for the script to load, then initialize the terminal
    script.onload = () => {
      if (terminalRef.current && !terminalRef.current.querySelector('iframe')) {
        // @ts-ignore - MetaTraderWebTerminal is not typed
        new MetaTraderWebTerminal('webterminal', {
          version: 5,
          server: 'MetaQuotes-Demo',
          demoAllServers: true,
          startMode: 'login',
          language: 'en',
          colorScheme: 'black_on_white',
        });
      }
    };

    // Clean up the script tag on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        bg="gray.800" 
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={8}
      >
        <Heading as="h1" mb={4} >
          Welcome to TradingBot
        </Heading>
        <Text mb={8}>
          This website will show you an overview on your MetaTrader5
        </Text>
        <div id="webterminal" ref={terminalRef} style={{ width: '100%', height: '650px', marginBottom: '10'}} /> 
      </Box>
    </ChakraProvider>
  );
};

export default Home;