import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [operatorsDropdown, setOperatorsDropdown] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Tour Africa" className="navbar-logo-img" />
          <span className="logo-text">Tour Africa</span>
        </Link>
                 
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/destinations" className={isActive('/destinations') ? 'active' : ''} onClick={() => setIsOpen(false)}>
            Destinations
          </Link>
          <Link to="/explore" className={isActive('/explore') ? 'active' : ''} onClick={() => setIsOpen(false)}>
            Experiences
          </Link>
          
          {/* Operators with Dropdown */}
          <div 
            className="dropdown"
            onMouseEnter={() => setOperatorsDropdown(true)}
            onMouseLeave={() => setOperatorsDropdown(false)}
          >
            <Link 
              to="/operators" 
              className={isActive('/operators') || isActive('/tours') ? 'active' : ''}
            >
              Operators <ChevronDown size={14} />
            </Link>
            
            {operatorsDropdown && (
              <div className="dropdown-menu">
                <Link to="/tours" className={isActive('/tours') ? 'active' : ''} onClick={() => setIsOpen(false)}>
                  Tours
                </Link>
                <Link to="/travel-requirements" onClick={() => setIsOpen(false)}>
                  Travel Requirements
                </Link>
              </div>
            )}
          </div>

          <Link to="/review" className={isActive('/review') ? 'active' : ''} onClick={() => setIsOpen(false)}>
            Trust & Safety
          </Link>
          <Link to="/support" className={isActive('/support') ? 'active' : ''} onClick={() => setIsOpen(false)}>
            Support
          </Link>
          <Link to="/referral" className={isActive('/referral') ? 'active' : ''} onClick={() => setIsOpen(false)}>
            Referral
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/login" className="btn-login">Sign In</Link>
          <Link to="/register" className="btn-primary btn-start">Start with us</Link>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar