import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Leonardo Fernández</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#MisDatos">Informacion Personal</Nav.Link>
            <Nav.Link href="#Estudios">Formación</Nav.Link>
            <Nav.Link href="#Trabajo">Experiencia Laboral</Nav.Link>
            <Nav.Link href="#Hobbies">Hobbie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;