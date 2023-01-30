import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/auth/auth-operation';
export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);
  const shoulRestricted = token && register;
  return shoulRestricted ? <Navigate to="/" /> : children;
};
