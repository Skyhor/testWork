import { Navigation } from 'components/Navigate/Navigate';
import { AuthNavigation } from 'components/Navigate/AuthNavigation';
import { UserAuthMenu } from 'components/auth/UserAuthMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <Heading size="sm">
        <header>
          {token ? <UserAuthMenu /> : <AuthNavigation />}
          <Navigation />
        </header>
      </Heading>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
