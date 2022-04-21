import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu openState={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">
          About
        </MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/github">
          Github
        </MenuLink>
        <MenuLink
          onClick={() => setIsOpen(!isOpen)}
          onMouseUp={() => sessionStorage.clear()}
          to="/"
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
