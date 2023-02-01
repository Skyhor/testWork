import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';
import { FormLabel, Input } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
// import { Link } from '@chakra-ui/react';
export const RegistreForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const refLocation = useRef(location.state?.location);
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Box
      w="100%"
      h="200px"
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
    >
      <Center>
        <Card mt="100px">
          <Link to={refLocation.current ?? '/'}>Go back</Link>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormLabel>
                Name:
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </FormLabel>
              <FormLabel>
                Email:
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </FormLabel>
              <FormLabel>
                Password:
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </FormLabel>
              <Button
                colorScheme="teal"
                variant="outline"
                type="submit"
                onSubmit={handleSubmit}
                mr="100px"
              >
                Register
              </Button>
              <Link to="/login"> I hav accaunt</Link>
            </form>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
