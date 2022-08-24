import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledNavbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: baseline;
  align-items: center;
  /* position: fixed;
  top: 0;
  z-index: 999; */
  width: 100%;
  height: 80px;
  font-size: 32px;
  border-bottom: 1px;
`;

const NavName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  color: #15dba3;
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-self: flex-end;
  justify-content: space-around;
  align-items: center;
`;

const NavBurger = styled(FaBars)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 18px;
  }
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <NavName>Nicholas Blanco</NavName>
      <NavMenu>
        <NavBurger />
        <NavLink>Experience</NavLink>
        <NavLink>Education</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Courses/Certificates</NavLink>
      </NavMenu>
    </StyledNavbar>
  );
};

export default Navbar;
