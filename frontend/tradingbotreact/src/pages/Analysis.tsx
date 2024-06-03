import React from 'react';
import {
  Box,
  Heading,
  Text,
  ChakraProvider,
  extendTheme,
  Divider,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Center,
} from '@chakra-ui/react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Area,
  AreaChart,
} from 'recharts';

// Extend the default Chakra UI theme to set the color mode to dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Analysis: React.FC = () => {
  // Mock data for the line chart
  const chartData = [
    { date: '2024-01-01', value: 100 },
    { date: '2024-01-02', value: 200 },
    { date: '2024-01-03', value: 150 },
    { date: '2024-01-04', value: 300 },
    { date: '2024-01-05', value: 400 },
  ];

  // Mock data for the bar chart
  const barChartData = [
    { name: 'AAPL', value: 200 },
    { name: 'MSFT', value: 300 },
    { name: 'GOOGL', value: 400 },
    { name: 'AMZN', value: 500 },
  ];

  // Mock data for additional metrics
  const totalTrades = 50;
  const dailyPLPercentage = 2.5;

  const totalTradesData = [
    { date: '2024-01-01', totalTrades: 10 },
    { date: '2024-01-02', totalTrades: 15 },
    { date: '2024-01-03', totalTrades: 20 },
    { date: '2024-01-04', totalTrades: 18 },
    { date: '2024-01-05', totalTrades: 25 },
  ];


  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        bg="gray.800"
        color="white"
        p={8}
      >
        <Center>
            <Heading as="h1" mb={50}>
            Analysis Dashboard
            </Heading>
        </Center>

        <Divider mb={6} />

        <Flex justifyContent="space-between" mb={6}>
          <Stat>
            <StatLabel>Total Trades</StatLabel>
            <StatNumber>{totalTrades}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Daily P/L Percentage</StatLabel>
            <StatNumber color={dailyPLPercentage >= 0 ? 'green.500' : 'red.500'}>
                {dailyPLPercentage >= 0 ? `+${dailyPLPercentage}%` : `${dailyPLPercentage}%`}
            </StatNumber>
            </Stat>
        </Flex>

        <Divider mb={6} />

        <Text fontSize="xl" mb={2}>
          Profit/Loss Total
        </Text>
        <ResponsiveContainer width="100%" height={300}>
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

        <Divider mb={6} />

        <Text fontSize="xl" mb={2}>
          Holding Size
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <Divider mb={6} />

        <Text fontSize="xl" mb={2}>
          Total Trades Over Time
        </Text>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={totalTradesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="totalTrades" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </ChakraProvider>
  );
};

export default Analysis;
