import React, { useState } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

export const MyNavbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const togglerHandler = () => setIsMenuToggled((toggled) => !toggled);

  return (
    <Navbar color="light" container="fluid" expand="md" full={true} light>
      <NavbarBrand href="/">My React App</NavbarBrand>
      <NavbarText className="ms-3 me-5">Alberto Aguilera Sanz</NavbarText>
      <NavbarToggler onClick={togglerHandler} />
      <Collapse isOpen={isMenuToggled} navbar>
        <Nav className="me-auto" navbar>
          <NavItem className="me-5">
            <NavLink href="*">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};
