// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to PhotoStudio</h1>
        <p>Capture Your Moments</p>
        <Link to="/gallery" className="btn btn-primary">
          View Gallery
        </Link>
      </div>
      <div className="intro-section">
        <h2>About Us</h2>
        <p>
          At PhotoStudio, we specialize in capturing your most precious moments. Whether it's a wedding, a family portrait, or a special event, our team of professional photographers is here to provide you with stunning images that you'll cherish forever.
        </p>
        <Link to="/about" className="btn btn-secondary">
          Learn More
        </Link>
      </div>
      <div className="featured-photos">
        <h2>Featured Photos</h2>
        <div className="photo-grid">
          <img src="https://via.placeholder.com/300x200" alt="Featured 1" />
          <img src="https://via.placeholder.com/300x200" alt="Featured 2" />
          <img src="https://via.placeholder.com/300x200" alt="Featured 3" />
          <img src="https://via.placeholder.com/300x200" alt="Featured 4" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
