import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Map from './Map';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: '5',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/feedback', formData);
      alert('Feedback submitted successfully');
      setFormData({
        name: '',
        email: '',
        message: '',
        rating: '5',
      });
    } catch (error) {
      console.error('Error submitting feedback', error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <Container fluid id="container" className="container-fluid">
      <h1 id="h1">Contact Us</h1>
      <section id="one">
        <Row id="two">
          <Col md={6} sm={12}>
            <h2 id="contact-h2">Our Address</h2>
            <p id="contact-p">Sakthi Polyclinic, <br />93, New Scheme Road, <br />Pollachi - 642002.<br />
            <img src="/image/phone.png" alt="mobile Icon" id="icon-ph"/> 95850 26625
            
            </p>
            
          </Col>
          <Col id="contact-map" md={6} sm={12}>
            <Map />
          </Col>
        </Row>
      </section>
      <Row>
        <Col md={12} col-12>
          <section id="feedback">
            <h2 id="feedback-h2">Feedback Form</h2>
            <form id="feedbackForm" onSubmit={handleSubmit}>
              <div className="form-group" id="div">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group" id="div">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group" id="div">
                <label htmlFor="message">Feedback:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group" id="div">
                <label htmlFor="rating">Rating:</label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </div>
              <div class="submit">
              <button type="submit" className="btn-submit">Submit Feedback</button>
              </div>

            </form>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
