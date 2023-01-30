import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <nav>
        <ul>
          {token && (
            <li>
              <Link to="contacts">Contacts</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
