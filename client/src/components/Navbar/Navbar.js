import React from 'react';
import { Nav, NavBarList, NavItem, NavLink } from './styles'; // Import the styled components

const NavBar = () => {
  return (
    <Nav>
      <NavBarList>
        <NavItem><NavLink href="#/">Home</NavLink></NavItem>
        <NavItem><NavLink href="#/interactive-exercises">Interactive Exercises</NavLink></NavItem>
        <NavItem><NavLink href="#/community-page">Community Page</NavLink></NavItem>
        <NavItem><NavLink href="#/feedback">Feedback</NavLink></NavItem>
        <NavItem><NavLink href="#/progress">Progress</NavLink></NavItem>
      </NavBarList>
    </Nav>
  );
};

export default NavBar;
