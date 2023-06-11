import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  const bg = useColorModeValue('#423d33', 'transparent');
  const color = useColorModeValue('white', 'gray.800');
  return (
    <Box mb={4} bg={bg} color={color} w="100%" h="1200px">
      <AppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};
