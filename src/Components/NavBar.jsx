import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'; // Make sure this file includes Tailwind CSS styles

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand href="/"> <img className="sm:w-1/6 sm:h-1/6 md:w-48 lg:w-40" src="./images/bhavesh.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto active text-dark sm:text-1xl font-bold md:text-2xl">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/techstack">Tech Stack</Nav.Link>
                            <Nav.Link href="/project">Projects</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
