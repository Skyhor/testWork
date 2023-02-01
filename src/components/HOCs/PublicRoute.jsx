// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';
// import { register } from 'redux/auth/auth-operation';
export const PublicRoute = ({ children, restricted = false }) => {
  // const token = useSelector(selectToken);
  // const shoulRestricted = token && restricted;
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};
// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
