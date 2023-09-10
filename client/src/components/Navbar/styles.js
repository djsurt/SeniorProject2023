import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #333;
  color: white;
`;

export const NavBarList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #66a0ff;
  }
`;
