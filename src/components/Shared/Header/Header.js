import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="#">Fast Visa</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
             
            
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
             
            
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;