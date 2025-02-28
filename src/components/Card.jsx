import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Card({city}) {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!apiKey) throw new Error("API key is missing in .env file");

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]); 

 
  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box mt={5} p={5} border="1px solid #ccc" borderRadius="md">
      <Text fontSize="xl" fontWeight="bold">
        {weatherData.name} - {weatherData.sys?.country}
      </Text>
      <Text>🌡 Temperature: {weatherData.main?.temp}°C</Text>
      <Text>💨 Wind Speed: {weatherData.wind?.speed} m/s</Text>
      <Text>☁ Condition: {weatherData.weather?.[0]?.description}</Text>
    </Box>
  );
}
