import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';
import { selectName } from 'redux/auth/auth-selectors';
import { Button } from '@chakra-ui/react';
export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
      <p>{`Wellcom ${name} !`}</p>
    </>
  );
};
