import React, { useState } from 'react';
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="navB">
      <NavbarBrand href="/">Home</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <i className="fas fa-bars"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/login">Login</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/signup">Sign up</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
                </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Pet Pals</NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default navbar;
