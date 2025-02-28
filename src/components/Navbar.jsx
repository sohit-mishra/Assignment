import { Flex, Box, Text, Image, Button } from '@chakra-ui/react'
import { IoHome, IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Logo from '@/assets/logo.gif'
import { MdOutlineCastForEducation } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <Flex 
      p={6} 
      flexDirection="column" 
      alignItems="flex-start" 
      width={300} 
      display={{ base: "none", md: "flex" }} 
    >
    
      <Flex alignItems="center" mb={16}>
        <Image src={Logo} mixBlendMode="normal" width={20} />
        <Text fontSize="18px" fontWeight="bold">Weather App</Text>
      </Flex>

    
      <Box mb={16}>
        <Link to="/">
          <Flex p="10px 0" fontWeight="bold">
            <IoHome size={26} color="#727272" />
            <Text ml={4} fontSize="lg" fontWeight="lighter">Home</Text>
          </Flex>
        </Link>

        <Link to="/forecast">
          <Flex p="10px 0" fontWeight="bold">
            <MdOutlineCastForEducation size={26} color="#727272" />
            <Text ml={4} fontSize="lg" fontWeight="lighter">Forecast</Text>
          </Flex>
        </Link>

        <Link to="/settings">
          <Flex p="10px 0" fontWeight="bold">
            <IoSettings size={26} color="#727272" />
            <Text ml={4} fontSize="lg" fontWeight="lighter">Settings</Text>
          </Flex>
        </Link>
      </Box>

      <Flex textAlign="center" flexDirection="column" p={4} mb={10} bg="gray.100" borderRadius="md">
        <Text fontWeight="bold">Upgrade To Pro</Text>
        <Text fontSize="sm" color="gray.600">Get 1 month free and unlock features</Text>
        <Button mt={2} colorScheme="blue" size="sm">Upgrade</Button>
      </Flex>

      {/* Footer Links */}
      <Box mt={16}>
        <Link to="/help">
          <Flex p="10px 0" fontWeight="bold">
            <IoIosHelpCircleOutline size={26} color="#727272" />
            <Text ml={4} fontSize="lg" fontWeight="lighter">Help & Information</Text>
          </Flex>
        </Link>

        <Link to="/logout">
          <Flex p="10px 0" fontWeight="bold">
            <HiLogout size={26} color="#727272" />
            <Text ml={4} fontSize="lg" fontWeight="lighter">Logout</Text>
          </Flex>
        </Link>
      </Box>
    </Flex>
  )
}
