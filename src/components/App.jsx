import { Route, Routes } from 'react-router-dom';
import { Layout } from './Page/Layout';
import { HomePage } from './Page/HomePage';
import { LoginPage } from './Page/LoginPage';
import { RegisterPage } from './Page/RegisterPage';
import { ContactPage } from './Page/ContactsPage';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './HOCs/PrivateRoute';
import { PublicRoute } from './HOCs/PublicRoute';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';

export const App = () => {
  const distpatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  useEffect(() => {
    distpatch(fetchCurrentUser());
  }, [distpatch]);
  return (
    !isFetchingCurrentUser && (
      <div>
        {/* <TestStyle /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="home"
              element={
                <PublicRoute restricted>
                  {/* //restricted = {true}// */}
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              path="Contacts"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="Register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="Login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    )
  );
};
