import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar  className="navy  sticky-top p-2">
            <Container  className="navy justify-content-center p-0">
                <Navbar.Toggle aria-controls=" nav " />
                <Navbar.Collapse className="nav justify-content-center">
                    <Nav className="navy justify-content-center " >
                        <Nav.Link className="navy text-center" href="/#aboutMe">About Me</Nav.Link>
                        <Nav.Link className="navy text-center" href="/#skills">Skills</Nav.Link>
                        <Nav.Link className="navy text-center" href="/#projects">Projects</Nav.Link>
                        <Nav.Link className="navy text-center" href="/#experiences">Experience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;