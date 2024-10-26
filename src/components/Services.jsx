import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Assuming you're using react-i18next for translation
import './Services.css';

const services = [
  {
    title: 'Well Baby Clinic and Immunization',
    image: '/image/wellbaby.jpg',
    description: 'At our Well Baby Clinic, we ensure that every newborn and infant receives the best care possible. From regular checkups to timely immunizations, we focus on helping your child grow strong and healthy. Our compassionate team works closely with parents to guide them through this crucial phase of their child’s development. Every vaccine administered is a step toward a healthier future.',
  },
  {
    title: 'Asthma Clinic',
    image: '/image/asthma.jpg',
    description: 'We provide specialized care for children with respiratory issues. With a focus on prevention and treatment, we help families manage asthma, allowing children to breathe easier and lead fuller lives. Our approach is not just about managing symptoms but empowering families to create a safe environment for their children, free from unnecessary worries..',
  },
  {
    title: 'Seizure Clinic',
    image: '/image/Seizure.jpg',
    description: 'Caring for children with epilepsy and seizure disorders is at the heart of our Seizure Clinic. We focus on creating individualized treatment plans that ensure the child’s safety while fostering a positive, hope-filled outlook. Our expert care team offers education, resources, and emotional support to families to navigate these challenges confidently.',
  },
  {
    title: 'Cerebral Palsy and Autistic Children Care',
    image: '/image/Cerebral -Palsy.jpg',
    description: 'We provide compassionate and holistic care for children with Cerebral Palsy and Autism. We believe every child is unique, and our treatments are designed to support their individual needs. We offer therapies, counseling, and support to help your child thrive in their own way. With patience and understanding, we work toward creating a brighter future for them.',

  },
  {
    title: 'Kidney diseases',
    image: '/image/Kidney.jpg',
    description: 'Our dedicated team provides essential primary care and guidance to parents, ensuring a healthy lifestyle for children. We focus on preventive care, early diagnosis, and personalized advice to support families in maintaining their childrens well-being, helping them grow up strong and healthy.',
  },
  {
    title: 'Adolescent Clinic (10-20 years)',
    image: '/image/adolescent-clinic.jpg',
    description: 'As adolescents navigate the complexities of growing up, our Adolescent Clinic is here to provide guidance and support. We address not only physical health but also emotional and mental well-being. Our goal is to help teenagers transition smoothly into adulthood, giving them the tools and confidence they need to thrive.',
  },
  {
    title: 'Blood diseases including Thalassemia',
    image: '/image/blood-disease.jpg',
    description: 'For children with blood disorders like Thalassemia, our clinic provides essential care and long-term management tailored to their specific needs. We focus on offering guidance and support to families, ensuring that children receive the care they need for a healthier, more fulfilling life.',
  },
  {
    title: 'Diet & Nutrition Advice',
    image: '/image/nutrition-advice.jpg',
    description: 'Good nutrition is the foundation of a healthy life, and we are committed to guiding families through this journey. Our personalized dietary advice helps ensure that every child receives the nutrients they need to grow and develop properly. We work with parents to instill healthy eating habits that can last a lifetime, promoting a future filled with vitality and wellness.',
  },
];

const Services = () => {
  const { t } = useTranslation(); // For translation
/*
  return (
    <>
      <h3 id="our">{t('Our Services')}</h3>
      <Row xs={1} md={2} lg={2} className="g-4">
        {services.map((service, idx) => (
          <Col key={idx}>
            <Card class="service-card">
              <Card.Img class="service-image" variant="top" src={service.image} alt={service.title} />
              <Card.Body class="card-body">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Services;
*/
return (
  <Container fluid className="services-container">
    <h3 id="h3">{t('Our Services')}</h3>
    {services.map((service, idx) => (
      <Row lg={6} xs={12}
        key={idx}
        className={`service-section ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-5`}
      >
        {/* Text Section */}
        <Col lg={6} xs={12} className={`service-text order-lg-1 order-2`}>
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </Col>

        {/* Image Section */}
        <Col lg={6} xs={12} className={`order-lg-2 order-1`}>
          <img
            src={service.image}
            alt={service.title}
            className="service-image img-fluid"
          />
        </Col>
      </Row>
    ))}
  </Container>
);
};

export default Services;