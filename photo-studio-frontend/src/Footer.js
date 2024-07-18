import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/about">How it works</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/investors">Investors</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/contact">Contact</Link>
              <Link to="/support">Support</Link>
              <Link to="/locations">Locations</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/facebook">Facebook</Link>
              <Link to="/instagram">Instagram</Link>
              <Link to="/twitter">Twitter</Link>
              <Link to="/youtube">YouTube</Link>
              <Link to="/linkedin">LinkedIn</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                PhotoStudio
              </Link>
            </div>
            <small className="website-rights">PhotoStudio © 2023</small>
            <div className="social-icons">
              <Link className="social-icon-link facebook" to="/facebook" aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link className="social-icon-link instagram" to="/instagram" aria-label="Instagram">
                <FaInstagram />
              </Link>
              <Link className="social-icon-link twitter" to="/twitter" aria-label="Twitter">
                <FaTwitter />
              </Link>
              <Link className="social-icon-link youtube" to="/youtube" aria-label="YouTube">
                <FaYoutube />
              </Link>
              <Link className="social-icon-link linkedin" to="/linkedin" aria-label="LinkedIn">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
