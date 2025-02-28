import { useState } from "react";
import { Box, Heading, Text, Flex, Grid } from "@chakra-ui/react";
import { SlCalender } from "react-icons/sl";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Card from "./Card";

export default function Dashboard() {
  const [chartData, setChartData] = useState([
    { time: "6 AM", temp: 20 },
    { time: "9 AM", temp: 22 },
    { time: "12 PM", temp: 25 },
    { time: "3 PM", temp: 27 },
    { time: "6 PM", temp: 24 },
    { time: "9 PM", temp: 21 },
  ]);

  return (
    <Box width="100%" p={{ base: 4, md: 10 }}>
      {/* Header Section */}
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Box mb={{ base: 4, md: 0 }}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={3}>Hello, Margaret</Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>Stay updated with real-time weather alerts and forecasts!</Text>
        </Box>
        <Flex align="center">
          <Text fontSize={{ base: "sm", md: "md" }} mr={3}>
            {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </Text>
          <SlCalender size={20} />
        </Flex>
      </Flex>

      {/* Temperature Trend Chart */}
      <Box mt={5} p={5} border="1px solid #ccc" borderRadius="md">
        <Text fontSize="lg" fontWeight="bold" mb={3}>Temperature Trend (Past Hours)</Text>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#3182CE" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Weather Cards - Responsive Grid */}
      <Grid 
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} 
        gap={4} 
        mt={5}
      >
        <Card city="New Delhi" />
        <Card city="Goa" />
        <Card city="Mumbai" />
        <Card city="Bengaluru" />
      </Grid>
    </Box>
  );
}
