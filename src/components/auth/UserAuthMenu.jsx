import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';
import { selectName } from 'redux/auth/auth-selectors';
import { Box, Button, Text } from '@chakra-ui/react';
export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <Box display="flex">
      <Button mr="15px" onClick={() => dispatch(logout())}>
        Logout
      </Button>
      <Text mt="10px">{`Wellcom ${name} !`}</Text>
    </Box>
  );
};
