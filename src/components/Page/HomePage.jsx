import video from '../../video/video.mp4';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <Box w="100%" h="100vh">
      <video src={video} autoPlay loop muted height="100%" width="100%" />
      <Box
        display="flex"
        flexDirection="column"
        top="390"
        pos="absolute"
        ml="20px"
      >
        <Text fontSize="5xl" color="blue">
          Zelensky uses my APP
        </Text>
        <Text fontSize="4xl" color="yellow">
          And you Can!
        </Text>
        <Box>
          <Link to="register">
            <Button>Start Now! </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
