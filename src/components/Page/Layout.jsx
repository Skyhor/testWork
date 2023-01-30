import { Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { Navigation } from 'components/Navigate/Navigate';
import { AuthNavigation } from 'components/Navigate/AuthNavigation';
import { UserAuthMenu } from 'components/auth/UserAuthMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { Outlet } from 'react-router-dom';
export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <header>
        {/* <HomePage /> */}
        {token ? <UserAuthMenu /> : <AuthNavigation />}
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
