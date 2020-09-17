import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './header.scss';

const Header = () => (
<Navbar id="header" bg="light" expand="lg">
  <Navbar.Brand className="text-left" id="header-brand" href="#home">Ted Koomen</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse inline id="basic-navbar-nav" className="text-right">
    <Nav className="ml-auto">
      <Nav.Link className="header-link" href="#home">About</Nav.Link>
      <Nav.Link className="header-link" href="#link">Blog</Nav.Link>
      <Nav.Link className="header-link" href="#link">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header