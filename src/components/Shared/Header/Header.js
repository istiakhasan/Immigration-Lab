import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link } from 'react-router-dom'
import auth from '../../../firebase.config';
import Loading from '../Loading/Loading';
import './header.css'

const Header = () => {

  const [user, loading, error] = useAuthState(auth);

  //handle logout
  const handleLogOut=()=>{
    signOut(auth)
  };
  return (
    <Navbar sticky='top' style={{ background: "#000000" }} expand="lg">
      <Container >
        <Navbar.Brand as={Link} style={{ color: "#AA7D83" }} className="fw-bold" to="/">Immigration Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='text-center' id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"


          >
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/home">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blog">Blog</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/checkout/1">Checkout</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
            {
              loading? (
                <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
               </div>
              ):(
                user ? (<button onClick={handleLogOut} className='logout-btn px-4 rounded-pill   fw-bold ms-4'>Logout</button>) : (
                  <>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/login">Login</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/register">Register</NavLink>
                  </>
                )
              )
              
            }


          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;