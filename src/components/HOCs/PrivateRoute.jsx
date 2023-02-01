// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';
// export const PrivateRoute = ({ children }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const token = useSelector(selectToken);
//   return token ? children : <Navigate to="/" />;
// };
export const PrivateRoute = ({ children }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to="/" /> : children;
};
