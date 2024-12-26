import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="header">
        
      </header>
      <section id="mission">
        <h2>Our Mission</h2>
        <p>Purrfect Adoption is dedicated to finding loving homes for cats in need. Our mission is to connect wonderful felines with caring families, ensuring a happy and healthy life for every cat we rescue.
        </p>
      </section>
      <section id="history">
        <h2>Our History</h2>
        <p>Our team of passionate volunteers works tirelessly to provide shelter, medical care, and love to cats awaiting their forever homes. We believe that every cat deserves a chance at happiness, and we strive to make the adoption process as smooth and joyful as possible for both cats and their new families.
        </p>
      </section>
      <section id="team">
        <h2>Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Bob Doe</h3>
            <p>Director</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Manager</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Brown</h3>
            <p>Coordinator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
