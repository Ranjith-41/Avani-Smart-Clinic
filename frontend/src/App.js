//import logo from './logo.svg';
/*import './App.css';

function App() {
  return (
    <div>hello</div>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Immunization from './components/Immunization';
import ContactUs from './components/ContactUs';
/*import Appointment from './components/Appointment';*/

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/immunization" element={<Immunization />} />
          <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/appointment" element={<Appointment />} /> */}  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
