import logo from "../assets/images/bandera.png";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarComponent() {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img
            className="margin-logo"
            src={logo}
            alt="Logo"
            width="40px"
            height="50px"
          />
          <Navbar.Brand href="#home">Centro Vecinal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Inicio</Nav.Link>
              <Nav.Link href="#GetAll">Todos los Centros Vecinales</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="My Account" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Set Theme
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
