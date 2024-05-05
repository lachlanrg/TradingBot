import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, ChakraProvider, extendTheme, Divider, Table, Thead, Tbody, Tr, Th, Td, Center } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Trading: React.FC = () => {
  const [tradingInfo, setTradingInfo] = useState<any>({
    accountBalance: 10000,
    openPositions: [
      { id: 1, symbol: 'AAPL', quantity: 100, price: 150.25 },
      { id: 2, symbol: 'MSFT', quantity: 50, price: 250.75 },
      // Add more open positions
      { id: 3, symbol: 'GOOGL', quantity: 75, price: 2700.50 },
      { id: 4, symbol: 'AMZN', quantity: 25, price: 3300.25 },
    ],
    orderHistory: [
      { id: 1, symbol: 'AAPL', quantity: 50, price: 151.50, type: 'Buy' },
      { id: 2, symbol: 'MSFT', quantity: 25, price: 252.00, type: 'Buy' },
      // Add more order history
      { id: 3, symbol: 'AAPL', quantity: 25, price: 160.75, type: 'Sell' },
      { id: 4, symbol: 'MSFT', quantity: 10, price: 255.50, type: 'Buy' },
    ]
  });
  useEffect(() => {
    // Make the fetch call when the component mounts
    fetch('http://127.0.0.1', {
      method: 'POST',
      body: JSON.stringify({ /* Request data */ }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Update state with the response data
      setTradingInfo(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []); // Empty array ensures the effect runs only once when the component mounts

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        bg="gray.800"
        color="white"
        p={8}
      >
        <Center>
          <Heading as="h1" mb={50} mt={4}>
            Trading History
          </Heading>
        </Center>
        <Text fontSize="xl" mb={4}>
          Account Balance: ${tradingInfo.accountBalance}
        </Text>
        <Divider />
        <Text fontSize="xl" mt={4} mb={2}>
          Open Positions
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Symbol</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tradingInfo.openPositions.map((position: any) => (
              <Tr key={position.id}>
                <Td>{position.symbol}</Td>
                <Td>{position.quantity}</Td>
                <Td>${position.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Text fontSize="xl" mt={4} mb={2} marginTop={(20)}>
          Order History
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Symbol</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tradingInfo.orderHistory.map((order: any) => (
              <Tr key={order.id} color={order.type === 'Buy' ? 'green' : 'red'}>
                <Td>{order.type}</Td>
                <Td>{order.symbol}</Td>
                <Td>{order.quantity}</Td>
                <Td>${order.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
};

export default Trading;
