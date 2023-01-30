import { Box, Container, Flex, Image } from '@chakra-ui/react';
import logo from '../../img/logoTF.png';
export const TestStyle = () => {
  return (
    <Box as="header">
      <Container maxW="container.lg">
        <Flex>
          <Image src={logo} boxSize="100px" objectFit="cover" />
        </Flex>
      </Container>
    </Box>
  );
};
