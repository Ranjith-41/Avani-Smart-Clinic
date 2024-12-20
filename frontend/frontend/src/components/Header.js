// src/components/Header.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher'; // Ensure this component exists
import './Header.css';

const Header = () => {
  return (
    <Navbar id="navbar" expand="lg">
      <Container fluid>
        {/* Brand Name */}
        <Navbar.Brand id="navbar-brand" as={Link} to="/">
        <img
            src="/image/edit-no-logo.png" // Ensure the correct path to your logo
            alt="Clinic Logo"
            style={{ height: '80px', marginRight: '5px' ,borderRadius:'40px'}} // Adjust the logo size as needed
          />
          AVANI SMART CHILDREN'S CLINIC
        </Navbar.Brand>
        
        {/* Toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="content" className="me-auto">
            {/* Home Link */}
            <Nav.Link id="link" as={Link} to="/">
              Home
            </Nav.Link>
            
            {/* About Us Link */}
            <Nav.Link id="link" as={Link} to="/about">
              About 
            </Nav.Link>
            
            {/* Services Link */}
            <Nav.Link id="link" as={Link} to="/services">Services
            </Nav.Link>
            {/* Immunization Link */}
            <Nav.Link id="link" as={Link} to="/immunization">
              Immunization
            </Nav.Link>
            
            {/* Contact Us Link */}
            <Nav.Link id="link"  as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            
            {/* Appointment Booking Link 
            <Nav.Link id="link" as={Link} to="/appointment"> Appointment</Nav.Link>*/}
            
            </Nav>
          
          {/* Language Switcher 
          <LanguageSwitcher />*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
