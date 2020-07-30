import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Pic from '../../Assets/g.png';
import "./NavBar.css";


function NavBar() {
  return (
    <Navbar className="navigation"  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand id="firstName" href="/">Geo's Portfolio<img src={Pic} className="Geo-pic" alt="Geo" height='50px' /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <NavDropdown title="Projects" id="nav-dropdown">
        <NavDropdown.Item href="/projects" target="blank">All Projects</NavDropdown.Item>
        <NavDropdown.Divider/>
            <NavDropdown.Item href="https://gfran23.github.io/calculator2Project/" target="blank">Calculator</NavDropdown.Item>
            <NavDropdown.Item href="https://gfran23.github.io/airHockeyProject/" target="blank">Air Hockey Game</NavDropdown.Item>
            <NavDropdown.Item href="https://gfran23.github.io/omdbPractice/" target="blank">OMDB Project</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/" id="nav-dropdown">Home</Nav.Link>
          <Nav.Link href="/about" id="nav-dropdown">About</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
          
             
       
            
