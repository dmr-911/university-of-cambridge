import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/education-logo-2.png';

const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            University of Cambridge
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
                <Nav.Link><NavLink to="/home" className="nav-link">Home</NavLink></Nav.Link>
              
              
                <Nav.Link><NavLink to="/services" className="nav-link">Services</NavLink></Nav.Link>
              
              
                <Nav.Link><NavLink to="/courses" className="nav-link">Courses</NavLink></Nav.Link>
              
              
                <Nav.Link><NavLink to="/about" className="nav-link">About</NavLink></Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;