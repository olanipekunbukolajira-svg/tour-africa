import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'
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
    { path: '/support', label: 'Support' },
    { path: '/referral', label: 'Referral' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Tour Africa" className="navbar-logo-img" />
          <span className="logo-text">Tour Africa</span>
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