import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <Navbar sticky='top' style={{background:"#000000"}} expand="lg">
        <Container >
          <Navbar.Brand style={{color:"#AA7D83"}} className="fw-bold" href="#">Immigration Lab</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className='text-center' id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
             
            
            >
              <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to="/home">Home</NavLink>
              <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blog">Blog</NavLink>
              <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to="/checkout/:id">Checkout</NavLink>
              <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
              <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to="/login">Login</NavLink>
              <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to="/register">Register</NavLink>
             
            
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;