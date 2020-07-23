import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
        <NavDropdown key={'left'} title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="https://www.youtube.com/watch?v=LY7zaQ9tyaE" target="blank">music video</NavDropdown.Item>
            <NavDropdown.Item href="https://www.youtube.com/watch?v=sVC0IfC_3J8" target="blank">music</NavDropdown.Item>
            <NavDropdown.Item href="https://www.youtube.com/watch?v=Ky2AQwkTmzo" target="blank">music</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
          
             
            
