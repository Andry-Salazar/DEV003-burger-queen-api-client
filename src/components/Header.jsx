import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiLogOut } from 'react-icons/bi';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ fontFamily: "'Lilita One', cursive" }}>
      <Container>
        <Navbar.Brand style={{ fontSize: '2rem', color: '#E6AF2E' }}>Burger Queen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-nav" style={{ fontSize: "1.2rem" }}>
              <Nav>
                <Link to="/menu" style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                  margin: '10px',
                }}>Menu</Link>
              </Nav>
              <Nav>
                <Link to="/orders" style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                  margin: '10px',
                }}>Ordenes</Link>
              </Nav>
              <Nav>
            <NavDropdown title="Administrador" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/products" style={{
                  textDecoration: 'none',
                  color: 'black'
                }}>Productos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/empleados" style={{
                  textDecoration: 'none',
                  color: 'black'
                }}>Empleados</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Nav>
          <Nav >
            <Link to='/' style={{ textDecoration: 'none', color: '#9B9D9E', fontSize: '30px'}}><BiLogOut /></Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
