
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaUser, FaBell } from 'react-icons/fa';
import "../styles/navbar1.css"; // Import your custom CSS

const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="mx-auto"><strong>ISTM</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>About Us</Nav.Link>
            <Nav.Link as={Link} to="services" smooth={true} duration={500}>Our Services</Nav.Link>
            <Nav.Link as={Link} to="blog" smooth={true} duration={500}>Blog</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="ms-auto">
              <NavDropdown.Item href="#user"><FaUser /> Profile</NavDropdown.Item>
              <NavDropdown.Item href="#notifications"><FaBell /> Notifications</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="home" smooth={true} duration={500}>Home</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="about" smooth={true} duration={500}>About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="services" smooth={true} duration={500}>Our Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="blog" smooth={true} duration={500}>Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;



