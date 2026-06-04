import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/src/assests/logo.png" alt="African Tours" className="footer-logo-img" />
            <div className="logo.png">
              <span></span>
            </div>
            <p className="footer-desc">
              "One platform to discover, trust, and book African travel experiences."
              
            </p>
            <div className="footer-socials">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Youtube size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/destinations">Destinations</Link>
            <Link to="/explore">Experiences</Link>
            <Link to="/travel-requirements">Operators</Link>
            <Link to="/review">Trust & Safety</Link>
          </div>

          <div className="footer-col">
            <h4>Destination Categories</h4>
            <Link to="/destinations">Road Trips</Link>
            <Link to="/destinations">Art & Culture</Link>
            <Link to="/destinations">Adventure</Link>
            <Link to="/destinations">Safari</Link>
          </div>

          <div className="footer-col">
            <h4>Address</h4>
            <p><MapPin size={14} /> Lagos, Nigeria</p>
            <p><Phone size={14} /> +234 812 345 6789</p>
            <p><Mail size={14} /> TourAfrica@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>All Rights Reserved ©2026 TourAfrica</p>
          <div className="footer-legal">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
