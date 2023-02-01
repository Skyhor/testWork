// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from 'redux/auth/selectors';

// export const useAuth = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const user = useSelector(selectUser);

// };
import { useSelector } from 'react-redux';
import {
  selectToken,
  selectName,
  selectIsFetchingCurrentUser,
} from 'redux/auth/auth-selectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectName);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
// export const selectToken = state => state.auth.token;
// export const selectName = state => state.auth.user.name;
// export const selectIsFetchingCurrentUser = state =>
//   state.auth.isFetchingCurrentUser;
