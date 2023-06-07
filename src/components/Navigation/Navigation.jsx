import { Menu, HeaderLink } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div>
        <Menu>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          {isLoggedIn && (
            <li>
              <HeaderLink to="/contacts">Contacts</HeaderLink>
            </li>
          )}
          {/* <li>
            <HeaderLink to="/register">Register</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/login">Login</HeaderLink>
          </li> */}
        </Menu>
      </div>
    </>
  );
};
