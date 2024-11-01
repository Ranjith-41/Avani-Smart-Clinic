// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher'; // Ensure this component exists
import './Header.css';

const Header = () => {

   // State to control the expanded state of the Navbar
  const [expanded, setExpanded] = useState(false);

  // Function to close the menu when a link is clicked
  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar id="navbar" expand="lg" expanded={expanded}>
      <Container fluid className="d-flex justify-content-between align-items-center w-100">
        {/* Brand Name */}
 
        <Navbar.Brand id="navbar-brand" as={Link} to="/">
        <img id="logo"
            src="/image/edit-no-logo.png" // Ensure the correct path to your logo
            alt="Clinic Logo"
            style={{ height: '80px', marginRight: '5px' ,borderRadius:'40px'}} // Adjust the logo size as needed
          />
          AVANI SMART CHILDREN'S CLINIC
        </Navbar.Brand>
        
        {/* Toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        
        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav id="content" className="flex-row me-auto">
            {/* Home Link */}
            <Nav.Link id="link" as={Link} to="/"  onClick={handleNavClick}>
              Home
            </Nav.Link>
            
            {/* About Us Link */}
            <Nav.Link id="link" as={Link} to="/about"  onClick={handleNavClick}>
              About 
            </Nav.Link>
            
            {/* Services Link */}
            <Nav.Link id="link" as={Link} to="/services"  onClick={handleNavClick}>Services
            </Nav.Link>

              {/* WellnessHub Link */}
              <Nav.Link id="link" as={Link} to="/wellness"  onClick={handleNavClick}>
              Wellness Hub 
            </Nav.Link>
            
            {/* Immunization Link */}
            <Nav.Link id="link" as={Link} to="/immunization"  onClick={handleNavClick}>
              Immunization
            </Nav.Link>
            
            {/* Contact Us Link */}
            <Nav.Link id="link"  as={Link} to="/contact"  onClick={handleNavClick}>
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
