// src/components/Home.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Home.css';
import Map from './Map';
import ReviewsCarousel from './carousel';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container fluid id="container1" className="mt-4">
      <Card className="text-center mb-4" lg={12} sm={12}>
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

  <section className="health-tips">
  <h2 id="tips">Health Tips</h2>
  <div className="scroll-text">
    Stay hydrated! Water is essential for children's health. | Encourage your kids to eat fruits and vegetables daily. | Regular physical activity helps children stay fit and healthy.
  </div>
</section>


      <Row>
    <Col xs={12} md={12}>
    
<section class="vlog-section">
  <section class="health">
  <h2 id="health" class="mb-5">Health & Children's Vlogs</h2>

  </section>
  <div class="container">
    <div class="row">
      
      <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog1.jpg" class="card-img-top" alt="Vlog 1"/>
          <div class="card-body">
            <h5 class="card-title">Immunity Boosting Tips for Kids</h5>
            <p class="card-text">Essential tips to keep your children strong and healthy.</p>
            <a href="https://youtu.be/mYycjhpbI4w" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://www.onlymyhealth.com/tamil/which-fruit-is-best-for-increasing-immunity-23435" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
    
      <div class="col-md-4  mb-4">
        <div class="card vlog-card card2">
          <img src="/image/vlog2.jpg" class="card-img-top" alt="Vlog 2"/>
          <div class="card-body">
            <h5 class="card-title">Managing Child Allergies</h5>
            <p class="card-text">Expert advice on managing common childhood allergies .</p>
            <a href="https://youtu.be/dcCJRv1c5EY" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://www.bbc.com/tamil/science-62782782" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      
    
     
      <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog3.jpg" class="card-img-top" alt="Vlog 3"/>
          <div class="card-body">
            <h5 class="card-title">Healthy Eating Habits</h5>
            <p class="card-text">Guide to establishing healthy eating habits for your children.</p>
            <a href="https://youtu.be/lZp6Ntomljc" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://www.eatingwell.com/article/7938737/top-healthy-eating-habits-according-to-a-dietitian/" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
     
    <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog4.avif" class="card-img-top" alt="Vlog 4"/>
          <div class="card-body">
            <h5 class="card-title">Sleep Patterns</h5>
            <p class="card-text">Understand the importance of good sleep patterns for children's health.</p>
            <a href="https://youtu.be/j0M4v24gSaw" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://raisingchildren.net.au/newborns/sleep/understanding-sleep/about-sleep" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog5.jpg" class="card-img-top" alt="Vlog 5"/>
          <div class="card-body">
            <h5 class="card-title">Preventing Childhood Obesity</h5>
            <p class="card-text">Tips on preventing obesity and promoting healthy growth in children.</p>
            <a href="https://youtu.be/V982tUASYBw" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://www.sriramakrishnahospital.com/blog/pediatric-endocrinology/top-6-healthy-habits-for-early-childhood-obesity-prevention/" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog6.webp" class="card-img-top" alt="Vlog 6"/>
          <div class="card-body">
            <h5 class="card-title">Understanding Child Vaccines</h5>
            <p class="card-text">An in-depth guide to understanding how vaccines work in children.</p>
            <a href="https://youtu.be/OVcVSyjJkY4" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://www.yalemedicine.org/conditions/vaccines-for-kids#:~:text=A%20vaccine%20may%20contain%20a,encounters%20it%20in%20the%20future." class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
     
      <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog7.jpg" class="card-img-top" alt="Vlog 7"/>
          <div class="card-body">
            <h5 class="card-title">Exercise for Children</h5>
            <p class="card-text">How to encourage healthy physical activity and exercise.</p>
            <a href="https://youtu.be/HBX1U72anJg" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://www.healthychildren.org/English/healthy-living/fitness/Pages/Encouraging-Your-Child-to-be-Physically-Active.aspx" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog8.jpg" class="card-img-top" alt="Vlog 8"/>
          <div class="card-body">
            <h5 class="card-title">Mental Health Awareness</h5>
            <p class="card-text">How to identify and support your child's mental health needs.</p>
            <a href="https://youtu.be/JJ0V_nTiDHA" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://www.careinsurance.com/blog/health-insurance-articles/supporting-your-child-s-mental-health-and-well-being" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card vlog-card">
          <img src="/image/vlog9.jpg" class="card-img-top" alt="Vlog 9"/>
          <div class="card-body">
            <h5 class="card-title">The Importance of Hydration</h5>
            <p class="card-text">Understanding the role of hydration in children's health.</p>
            <a href="https://youtu.be/31F0laJjyy8" class="btn btn-primary btn-watch-now">Watch Now</a>
            <a href="https://masnaped.org/healthy-you/the-importance-of-hydration-in-children/" class="btn btn-secondary btn-read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     
    </Col>
    </Row>
    
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
            <p id="contact-p">Sakthi Polyclinic, <br />93, New Scheme Road, <br />Pollachi - 642002.<br />Phone: 95850 26625</p>
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
