// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container class="footer">
        <Row>
          <Col md={4} xs={12} className="text-center text text-md-left">
            <h4 id="footer-h4">Avani Smart Children's Clinic</h4>


            <p>Avani Smart Children's Clinic offers top-tier pediatric care with services like immunization, asthma management, developmental care, and nutritional guidance. It provides a holistic approach to child health, ensuring personalized and compassionate treatment for each patient.</p>
            </Col>
          <Col md={4} xs={6} className="text-center ">

            <h4 id="footer-h4">Contact Us</h4>
            <p id="text2">
            Sakthi Polyclinic,<br/>
            93, New Scheme Road,<br />
            Pollachi - 642002<br />
            Phone: 95850 26625<br />
            </p>
          </Col> 
            
         
          <Col md={4} xs={6} className="text-md-right" id="footer3">
            <h3 id="footer-h3">Follow Us</h3>
            <a href="https://www.facebook.com/p/Avanika-baby-clinic-Pollachi-100063693440137/" className="text-light mx-2 "id="icon" >
              <i id="icon1" className="fab fa-facebook"></i>Avanika baby clinic</a><br/>
            <a href="https://www.instagram.com/childhealth_dr.amutha/"id="icon" className="text-light mx-2">
              <i id="icon1" className="fab fa-instagram" ></i>childhealth_dr.amutha </a>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Avani Clinic. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
