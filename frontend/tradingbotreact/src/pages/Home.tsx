import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  ChakraProvider,
  extendTheme,
  Flex,
  VStack,
  HStack,
  useColorModeValue, 
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Select,

} from '@chakra-ui/react';

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Home: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [selectedLeverage, setSelectedLeverage] = useState('1x');
  const [selectedOrderType, setSelectedOrderType] = useState<'Buy' | 'Sell' | null>(null); 
  


  const leverageOptions = ['1x', '2x', '3x', '5x', '10x', '20x', '50x'];
  const selectedBg = useColorModeValue('blue.500', 'blue.700');
  const selectedColor = useColorModeValue('white', 'gray.800');

  const orderOptions: ('Buy' | 'Sell')[] = ['Buy', 'Sell'];

  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');

  const [price, setPrice] = useState(''); // State for price input
  const [isMarketOrder, setIsMarketOrder] = useState(false); // State for Market/Limit order

  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState('BTC/USD');
  const currencyPairs = ['BTC/USD', 'ETH/USD', 'LTC/USD', 'XRP/USD']; // Add more as needed

  const [chooseAlgorithmOption, setChooseAlgorithmOption] = useState('Kraken');
  const algorithmOption = ['Kraken', 'Default', 'Advanced']; 






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
          colorScheme: 'yellow_on_black',
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
        {/* <Heading as="h1" mb={4}>
          Welcome to TradingBot
        </Heading> */}
        {/* <Text mb={8}>
          This website will show you an overview on your MetaTrader5
        </Text> */}

        <Flex width="100%" height="650px" mb={10}>
        <Box 
          id="webterminal" 
          ref={terminalRef} 
          width="70%" // Terminal takes up 70% of the width
          height="650px" 
          marginBottom="10" 
        />
          <VStack flex="1" spacing={4} alignItems="center" p={4}>
            <HStack spacing={2}>
              {orderOptions.map((order) => (
                    <Button 
                      key={order}
                      size="lg"
                      width="100%"  // Make the button wider

                      colorScheme={selectedOrderType === order ? 'blue' : 'gray'} 
                      onClick={() => setSelectedOrderType(order)}
                      mx={2} // Add margin between buttons
                    >
                      {order}
                    </Button>
                  ))}
              </HStack>

              <VStack spacing={2} alignItems="start" width="100%">
                <Text>Choose Pair:</Text>
                <Select 
                  size="sm"
                  value={selectedCurrencyPair}
                  onChange={(e) => setSelectedCurrencyPair(e.target.value)}
                >
                  {currencyPairs.map((pair) => (
                    <option key={pair} value={pair}>
                      {pair}
                    </option>
                  ))}
                </Select>
              </VStack>

              <VStack spacing={2} alignItems="start" width="100%">
                <Text>Price:</Text>
                <HStack spacing={2}> 
                  <InputGroup size="sm" width="235px">
                    <Input
                      type="number" 
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      isDisabled={isMarketOrder}
                      placeholder="Enter price"
                    />
                    <InputRightElement pointerEvents="none" color="gray.500" fontSize="sm" paddingRight="1">
                      $
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    size="sm"
                    colorScheme={isMarketOrder ? 'blue' : 'gray'}
                    onClick={() => setIsMarketOrder(!isMarketOrder)}
                    px={5} // Add padding to the left and right of the button text
                  >
                    {isMarketOrder ? 'Market Order' : 'Limit Order'}
                  </Button>
                </HStack>
              </VStack>

            <VStack spacing={2} alignItems="start">
            <Text>Leverage:</Text>
            <HStack spacing={2}>
              {leverageOptions.map((leverage) => (
                <Text
                  key={leverage}
                  bg={selectedLeverage === leverage ? 'blue.500' : 'gray.700'}
                  color={selectedLeverage === leverage ? 'white' : 'gray.200'}
                  p={2}
                  px={3} // Add padding to the left and right of the button text
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => setSelectedLeverage(leverage)}
                >
                  {leverage}
                </Text>
              ))}
            </HStack>
          </VStack>

          <VStack spacing={2} alignItems="start" width="100%">
                <Text>Choose Algorithm:</Text>
                <Select 
                  size="sm"
                  value={chooseAlgorithmOption}
                  onChange={(e) => setChooseAlgorithmOption(e.target.value)}
                >
                  {algorithmOption.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </VStack>

          <VStack spacing={2} alignItems="start">
              <Text>Stop Loss / Take Profit:</Text>
              <HStack spacing={2}>
              <InputGroup size="sm">

                <Input
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  placeholder="Stop Loss"
                  size="sm"
                  mr={2} // Add margin right
                />
                <InputRightElement pointerEvents="none" color="gray.500" fontSize="sm" paddingRight="4">
                    $
                  </InputRightElement>
                </InputGroup>
                <InputGroup size="sm">
                <Input
                  value={takeProfit}
                  onChange={(e) => setTakeProfit(e.target.value)}
                  placeholder="Take Profit"
                  size="sm"
                />
                <InputRightElement pointerEvents="none" color="gray.500" fontSize="sm">
                    $
                  </InputRightElement>
                </InputGroup>
              </HStack>
            </VStack> 
            
              <Button 
                size="lg" 
                colorScheme="green" 
                width="100%"  // Make the button wider
                mt={5} // Add margin top for spacing 
              >
                Submit Order
              </Button>
          </VStack>
        </Flex>

        

      </Box>
    </ChakraProvider>
  );
};

export default Home;