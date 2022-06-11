import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/Recipe-App/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu openState={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/Recipe-App/about">
          About
        </MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/Recipe-App/github">
          Github
        </MenuLink>
        <MenuLink
          onClick={() => setIsOpen(!isOpen)}
          onMouseUp={() => sessionStorage.clear()}
          to="/Recipe-App/login"
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
