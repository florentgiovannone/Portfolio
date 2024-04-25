import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="justify-content-center">
                <Navbar.Brand  href="#home"></Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
        <Nav className="justify-content-center">
                        <Nav.Link className="text-center" href="#home">Skills</Nav.Link>
                        <Nav.Link className="text-center" href="#link">Projects</Nav.Link>
                        <Nav.Link className="text-center" href="#link">Experience</Nav.Link>
                        <Nav.Link className="text-center" href="#link">About Me</Nav.Link>
                        <Nav.Link className="text-center" href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;