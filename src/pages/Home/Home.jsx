import { Link } from 'react-router-dom';

import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { useAuth } from 'hooks';
//import theme from 'utilities/theme';

export const Home = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <Box
      mr={'auto'}
      ml={'auto'}
      w={'600px'}
      h={'600px'}
      mb={'30px'}
      mt={'20px'}
    >
      <Heading fontSize="3xl" textAlign="center">
        Stay connected with your Phonebook!
      </Heading>
      {isLoggedIn ? (
        <Link to="/login">
          <Text textAlign="center" fontSize="2xl" fontWeight="bold">
            Welcome, {user.name}!
          </Text>
        </Link>
      ) : (
        <Link to="/login">
          <Text textAlign="center" fontSize="2xl" fontWeight="bold">
            Please, Log in.
          </Text>
        </Link>
      )}
    </Box>
  );
};
