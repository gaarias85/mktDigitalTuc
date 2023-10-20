import { NavDropdown, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SwitchTheme from "./SwitchTheme";

const MainNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MKT digital Tuc</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Nosotros</Nav.Link>
              <Nav.Link href="#link">Servicios</Nav.Link>
              <Nav.Link href="#link">Clientes</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <SwitchTheme></SwitchTheme>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
