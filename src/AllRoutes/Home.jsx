import Profile from '@/components/Profile';
import Drashboard from '@/components/Drashboard';
import Navbar from '@/components/Navbar';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex justifyContent={'space-between'}>
      <Navbar />
      <Drashboard />
      <Profile />
    </Flex>
  );
}
