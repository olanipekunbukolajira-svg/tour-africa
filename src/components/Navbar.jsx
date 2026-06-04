import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin } from 'lucide-react'
import logo from '../assests/logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/explore', label: 'Experiences' },
    { path: '/travel-requirements', label: 'Operators' },
    { path: '/review', label: 'Trust & Safety' },
  
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container navbar-container">
    
              <img src="/src/assests/logo.png" alt="African Tours" className="footer-logo-img" /> 
        <Link to="/" className="navbar-logo">
              <div className="Home" /> 
              <div className="Tour Africa"></div>
                 
                 </Link>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="navbar-actions">
          <Link to="/login" className="btn-login">Sign In</Link>
          <Link to="/signup" className="btn-primary btn-start">Start with us</Link>
        </div>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
