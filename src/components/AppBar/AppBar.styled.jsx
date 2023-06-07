import styled from '@emotion/styled';
import { NavLink as StyledLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px grey solid;
  padding: 20px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const HeaderLink = styled(StyledLink)`
  text-decoration: none;
  color: grey;

  &.active {
    color: red;
  }
`;
