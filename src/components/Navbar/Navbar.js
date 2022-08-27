import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledNavbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: align;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  font-size: 18px;
  border-bottom: 1px;
  background-color: #292929;
`;

const NavName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  color: #9cdcfe;
  font-weight: 700;
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-self: flex-end;
  justify-content: space-around;
  align-items: center;
  padding-right: 50px;
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
    color: #ce9178;
    margin-left: 25px;
  }
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <NavName>nicholas.blanco</NavName>
      <NavMenu>
        <NavBurger />
        <NavLink>home</NavLink>
        <NavLink>projects</NavLink>
      </NavMenu>
    </StyledNavbar>
  );
};

export default Navbar;
