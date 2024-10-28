// src/components/Home.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Home.css';
import Map from './Map';
import ReviewsCarousel from './carousel';
import AboutUs from './AboutUs';
import Services from './Services';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container fluid id="container1" className="container-fluid mt-4">
      <Card className="text-center welcome mb-4" lg={12} sm={12}>
        <Card.Img class="img1"  src="/image/home1.jpg" alt="welcome" fluid/>
        <Card.ImgOverlay class="one">
          <Card.Title class="two">{t('Welcome')}</Card.Title>
          <Card.Text>
            Your trusted clinic for child care, serving children from 0 to 20 years old.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
   
      <Row id="col">
      <Col md={3} ></Col>
        <Col md={3} xs={5} >
          <h3 id="col-h">Consulting Hours:</h3>
          <h3 id="col-h">MON-SUN</h3>
        </Col>
      
        <Col md={3} xs={5}>
          
          <h4 id="col-h">10:00 AM - 2:00 PM</h4>
          <h4 id="col-h">6:00 PM - 8:00 PM</h4>
        </Col>
        <Col md={3} ></Col>
        </Row>

        <section>

          <AboutUs/>

        </section>

        
        <section id="service-section">

        <Services/>

        </section>


    
    <section id="review">
    <h1 id="review-h1">Hear from Our Patients</h1>
      <Row>
      <Col md={12} xs={12} id="review-content">
      
      <ReviewsCarousel/></Col>
       
       

      </Row> 
     </section>
     <Row></Row>
     <section id="one">
        <Row id="two">
          <Col md={6} sm={12}>
            <h2 id="contact-h2">Our Address</h2>
            <p id="contact-p">Sakthi Polyclinic, <br />93, New Scheme Road, <br />Pollachi - 642002.<br />            <img src="/image/phone.png" alt="mobile Icon" id="icon-ph"/> 95850 26625</p>
          </Col>
          <Col id="contact-map" md={6} sm={12}>
            <Map />
          </Col>
        </Row>
      </section>
    
    </Container>
     
    
  );
};

export default Home;
