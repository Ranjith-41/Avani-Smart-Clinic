import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './AboutUs.css'; // Custom CSS for styling

const AboutUs = () => {
  return (
    <Container fluid className="about-us-container">
      
      {/* Section 1: About the Clinic */}
      <section className="about-clinic mb-5">
        <Row className="align-items-center abt">
          <Col md={6}>
            <h2>About Avani Smart Children's Clinic</h2>
            <p>
              Avani Smart Children's Clinic, originally started as Avanika Baby Clinic in 2009 at Sakthi Hospital, Pollachi, has grown into a trusted name in pediatric care. Dr. Amutha, who completed her MBBS at Madras Medical College in 2002 and her MD in Pediatrics from Kasturba Medical College, leads the clinic. With years of experience in both public and private healthcare, she provides expert, compassionate care for children.
            </p>
          </Col>
          
        </Row>
      </section>

      {/* Section 2: Our Mission */}
      <section className="mission mb-5">
        <Row className="align-items-center">
          <Col lg={12}>
            <h2>Our Mission</h2>
            <p>
              <figure >
              " We provide holistic, compassionate healthcare to children. We believe in empowering parents through knowledge, fostering strong community health, and ensuring every child receives the care they deserve. Our goal is to create a healthier, happier future for all children. "
              <figcaption id="caption"> &mdash;<cite>Avani Smart Children's Clinic Team</cite>  </figcaption>
              </figure>
            </p>
          </Col>
        </Row>
      </section>
      <section class="abt2">
      {/*<img src="/image/abt2.jpg" alt="" class="abt2"></img>*/}
      <h2 id="h2">Meet Our Experts</h2>
      </section>

      

      {/* Section 3: Our Team */}
      <section className="team mb-5">
        

        {/* Team Member 1: Dr. Amutha */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3>Dr. Amutha</h3>
            <p>
              Dr. Amutha is the founder and chief consultant at Avani Smart Children's Clinic. She has over two decades of experience in pediatric healthcare and is deeply passionate about educating parents and providing personalized care for children. With a vast array of experience in government and private sectors, Dr. Amutha specializes in newborn care, vaccination, and management of various pediatric conditions.
            </p>
          </Col>
          <Col md={6}>
            <img src="/image/dr.jpg" alt="Dr. Amutha" className="img-fluid about-image img" />
          </Col>
        </Row>

        {/* Team Member 2: Staff Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="order-md-1 img">
            <img src="/image/our team.jpg" alt="Staff" className="img-fluid about-image" />
          </Col>
          <Col md={6} className="order-md-2">
            <h3>Our Dedicated Staff</h3>
            <p>
              Our team includes experienced and skilled professionals who are dedicated to ensuring the best possible care for children:
            </p>
            <ul>
              <li><strong>Mrs. Venkata Lakshmi</strong>: Administrative Officer, managing clinic operations with expertise.</li>
              <li><strong>Mrs. Uma</strong>: Lab Technician, ensuring accurate test results and reports.</li>
              <li><strong>Miss Sneha</strong>: Nursing staff, providing kind and compassionate care to patients.</li>
            </ul>
          </Col>
        </Row>
      </section>

      {/* Section 4: Achievements and Awards */}
      <section className="achievements mb-5">
        <h2 className="text-center">Achievements and Awards</h2>
        <Row className="align-items-center">
        <Col md={6} className="order-md-1">
            <img src="/image/achievements.jpg" alt="Achievements" className="img-fluid about-image" />
          </Col>
          <Col md={6}>
            <p>
              Dr. Amutha has been recognized for her contributions to pediatric healthcare in various forms, including:
            </p>
            <ul>
              <li>Speaker at multiple pediatric conferences and CMEs.</li>
              <li>Held several positions in the Indian Academy of Pediatrics (IAP) Coimbatore chapter.</li>
              <li>Co-author of the book <strong>"Parenting Adolescents"</strong> by IAP Coimbatore.</li>
              <li>Recipient of the <strong>"Active Pediatrician Award"</strong> at the State Conference in 2024.</li>
            </ul>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AboutUs;
