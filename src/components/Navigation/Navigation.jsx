import { Header, Menu, HeaderLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Header>
        <Menu>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/register">Register</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/login">Login</HeaderLink>
          </li>
        </Menu>
      </Header>
    </>
  );
};
