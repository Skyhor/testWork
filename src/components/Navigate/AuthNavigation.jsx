import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '250px',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    // background:
    //   'url(https://cdn.nur.kz/images/1120x630/243926ab7be28b87.webp?version=1) center/cover no-repeat',
  };
  return (
    <>
      <Card>
        <CardBody>
          <Flex color="black" display="flex" justifyContent="space-between">
            <nav>
              <ul>
                <Box flex="1" sx={basicBoxStyles}>
                  <Box ml="30px" color="teal"></Box>

                  <Flex color="white">
                    <NavLink to="/" color="teal">
                      Home
                    </NavLink>
                    <Box ml="30px" color="teal">
                      <Link to="register" color="teal">
                        Register
                      </Link>
                    </Box>
                    <Box ml="30px" color="teal">
                      <Link to="login">Login</Link>
                    </Box>
                  </Flex>
                </Box>
              </ul>
            </nav>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
