import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, ChakraProvider, extendTheme, Divider, List, ListItem, ListIcon, Flex, Center } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
      { symbol: 'AAPL', quantity: 100, price: 150.25 },
      { symbol: 'MSFT', quantity: 50, price: 250.75 }
    ],
    orderHistory: [
      { symbol: 'AAPL', quantity: 50, price: 151.50, type: 'Buy' },
      { symbol: 'MSFT', quantity: 25, price: 252.00, type: 'Buy' }
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

  // Mock data for the line chart
  const chartData = [
    { date: '2024-01-01', value: 100 },
    { date: '2024-01-02', value: 200 },
    { date: '2024-01-03', value: 150 },
    { date: '2024-01-04', value: 300 },
    { date: '2024-01-05', value: 400 },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh" // Set the minimum height of the box to the height of the viewport
        bg="gray.800" // Set the background color to a dark shade
        color="white" // Set the text color to white
        p={8}

      >
        <Center>
          <Heading as="h1" mb={50} mt={4} >
            Trading Dashboard
          </Heading>
        </Center>
        <Text fontSize="xl" mb={4}>
          Account Balance: ${tradingInfo.accountBalance}
        </Text>
        <Divider />
        <Text fontSize="xl" mt={4} mb={2}>
          Open Positions
        </Text>
        <List spacing={3}>
          {tradingInfo.openPositions.map((position: any, index: number) => (
            <ListItem key={index}>
              <Flex alignItems="center">
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text>
                  {position.symbol} - Quantity: {position.quantity}, Price: ${position.price}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </List>
        <Divider mt={4} />
        <Text fontSize="xl" mt={4} mb={2}>
          Order History
        </Text>
        <List spacing={3}>
          {tradingInfo.orderHistory.map((order: any, index: number) => (
            <ListItem key={index}>
              <Flex alignItems="center">
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text>
                  {order.type} {order.symbol} - Quantity: {order.quantity}, Price: ${order.price}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </List>
        <Divider mt={20} />
        <Text fontSize="xl" mt={20} mb={2}>
          Revenue Chart
        </Text>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </ChakraProvider>
  );
};

export default Trading;
