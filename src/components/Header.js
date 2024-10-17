import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <Navbar style={{backgroundColor:"#020120",width:"100%"}} expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uWLHfnwwcfa8gfqyYEuT6JjeFaaduc9DQQ&s' style={{width:"100px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link> 
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
           
            <Nav.Link as={Link} to="/order-history">Order History</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Login</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
