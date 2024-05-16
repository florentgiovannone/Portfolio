import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from  '../assets/images/Logo.png'
function NavBar() {
    return (
        <Navbar expand="lg" variant="danger" sticky="top" className="navy bg-body-primary">
            <Container>
                <Navbar.Brand href="#hero">
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navy" href="/#aboutMe">About me</Nav.Link>
                        <Nav.Link className="navy" href="/#skills">Skills</Nav.Link>
                        <Nav.Link className="navy" href="/#projects">Projects</Nav.Link>
                        <Nav.Link className="navy" href="/#experiences">Experiences</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;