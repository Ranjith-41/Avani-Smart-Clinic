// src/components/Appointment.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Appointment.css';

const Appointment = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    age: '',
    contact: '',
    preferredTime: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log(formData);
    setShowAlert(true);
    setFormData({
      name: '',
      sex: '',
      age: '',
      contact: '',
      preferredTime: '',
      message: ''
    });
  };

  return (
    <Container fluid id="Apt" className="mt-4">
      <h1 id="apt-h1">{t('Book an Appointment')}</h1>
      {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        Appointment booked successfully!
      </Alert>}
      <Form id="apt-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3 ">
          <Form.Label id="apt-label">Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formSex" className="mb-3">
          <Form.Label id="apt-label">Sex</Form.Label>
          <Form.Select 
            name="sex" 
            value={formData.sex} 
            onChange={handleChange} 
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label id="apt-label">Age</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter age" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formContact" className="mb-3">
          <Form.Label id="apt-label">Contact Number</Form.Label>
          <Form.Control 
            type="tel" 
            placeholder="Enter contact number" 
            name="contact" 
            value={formData.contact} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formPreferredTime" className="mb-3">
          <Form.Label id="apt-label">Preferred Time</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="e.g., 10:00 AM - 2:00 PM" 
            name="preferredTime" 
            value={formData.preferredTime} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label id="apt-label">Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Any additional information" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button id="apt-b" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Appointment;
