import { Menu, HeaderLink } from './Home.styled';

export const Home = () => {
  return (
    <>
      <div>Hello!</div>
      <Menu>
        <li>
          <HeaderLink to="/register">Register</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/login">Login</HeaderLink>
        </li>
      </Menu>
    </>
  );
};
