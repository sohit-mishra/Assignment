import { Image, Flex, Text, Box, Input } from '@chakra-ui/react';
import DisplayProfile from '@/assets/displayProfile.jpeg';
import { TiWeatherSunny, TiWeatherShower, TiWeatherWindy } from "react-icons/ti";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [city, setCity] = useState('Bengaluru');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
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

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <Box 
      p={6} 
      width={{ base: "100%", sm: "400px" }}  
      height="100vh"  
      display={{ base: "none", lg: "block" }}  
    >
      <Flex flexDirection="column" mt={10}>
      
        <Image 
          src={DisplayProfile} 
          width={120} 
          borderRadius="50%" 
          height={120} 
          objectFit="cover"  
          m="0 auto" 
        />
        <Text fontWeight="bold" mt={2} textAlign="center">Megan Nortan</Text>
        <Text fontSize="sm" color="#848484" pt={2} pb={2} textAlign="center">
          @megenotion
        </Text>

       
        <Flex justifyContent="center" gap={3}>
          <TiWeatherSunny size={30} color="#574848" />
          <TiWeatherShower size={30} color="#574848" />
          <TiWeatherWindy size={30} color="#574848" />
        </Flex>
      </Flex>

    
      <Flex flexDirection="column" mt={10}>
        <Text fontWeight="bold">Search Now</Text>
        <Input mt={3} value={city} onChange={handleChange} />
      </Flex>

     
      <Flex flexDirection="column" mt={5}>
        <Text fontWeight="bold">Current Weather</Text>
        {weatherData ? (
          <Box mt={2} p={3} border="1px solid #ccc" borderRadius="md">
            <Text fontSize="22px" mb={3}>{city}</Text>
            <Text>🌡 Temperature: {weatherData.main?.temp}°C</Text>
            <Text>🌬 Wind: {weatherData.wind?.speed} m/s</Text>
            <Text>☁ Condition: {weatherData.weather?.[0]?.description}</Text>
          </Box>
        ) : (
          <Text>Loading...</Text>
        )}
      </Flex>
    </Box>
  );
}
