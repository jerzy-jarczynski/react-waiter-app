// Bootstrap
import { Container, Nav, Navbar } from 'react-bootstrap';
// Router
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <Navbar bg="primary" expand="sm" variant="dark" className="mt-4 mb-4 rounded">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Waiter.app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default NavBar;