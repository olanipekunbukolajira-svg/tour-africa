import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [operatorsDropdown, setOperatorsDropdown] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  // Check if user is logged in
  const isAuthenticated = !!localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole') || 'traveler'

  // Hide navbar on dashboard pages
  const isOperatorDashboard = location.pathname.startsWith('/operator/') && 
    location.pathname !== '/operator/signin' && 
    location.pathname !== '/operator/signup'

  const isUserDashboard = location.pathname === '/dashboard' || 
    location.pathname.startsWith('/user/')

  if (isUserDashboard || isOperatorDashboard) return null

  const handleStartClick = () => {
    if (isAuthenticated) {
      if (userRole === 'operator') {
        navigate('/operators')
      } else {
        navigate('/dashboard')
      }
    } else {
      navigate('/start')
    }
    setIsOpen(false)
    setMobileDropdownOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userAvatar')
    navigate('/')
    window.location.reload()
  }

  // Close menu when route changes
  const handleLinkClick = () => {
    setIsOpen(false)
    setMobileDropdownOpen(false)
  }

  // Toggle mobile dropdown
  const toggleMobileDropdown = (e) => {
    e.preventDefault()
    setMobileDropdownOpen(!mobileDropdownOpen)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Tour Africa" className="navbar-logo-img" />
          <span className="logo-text">Tour Africa</span>
        </Link>

        {/* Navigation Links - Desktop + Mobile */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/destinations" className={isActive('/destinations') ? 'active' : ''} onClick={handleLinkClick}>
            Destinations
          </Link>
          <Link to="/explore" className={isActive('/explore') ? 'active' : ''} onClick={handleLinkClick}>
            Experiences
          </Link>

          {/* Desktop Dropdown (hover) */}
          <div 
            className="dropdown desktop-dropdown"
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
                <Link to="/tours" className={isActive('/tours') ? 'active' : ''} onClick={handleLinkClick}>
                  Tours
                </Link>
                <Link to="/travel-requirements" onClick={handleLinkClick}>
                  Travel Requirements
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Dropdown (click/tap) */}
          <div className={`dropdown mobile-dropdown ${mobileDropdownOpen ? 'active' : ''}`}>
            <Link 
              to="#" 
              onClick={toggleMobileDropdown}
              className={isActive('/operators') || isActive('/tours') ? 'active' : ''}
            >
              Operators <ChevronDown size={14} className={mobileDropdownOpen ? 'rotate' : ''} />
            </Link>
            
            <div className="dropdown-menu">
              <Link to="/tours" className={isActive('/tours') ? 'active' : ''} onClick={handleLinkClick}>
                Tours
              </Link>
              <Link to="/travel-requirements" onClick={handleLinkClick}>
                Travel Requirements
              </Link>
            </div>
          </div>

          <Link to="/review" className={isActive('/review') ? 'active' : ''} onClick={handleLinkClick}>
            Trust & Safety
          </Link>
          <Link to="/support" className={isActive('/support') ? 'active' : ''} onClick={handleLinkClick}>
            Support
          </Link>
          <Link to="/referral" className={isActive('/referral') ? 'active' : ''} onClick={handleLinkClick}>
            Referral
          </Link>

          {/* Mobile-only Auth Buttons */}
          <div className="mobile-auth">
            {isAuthenticated ? (
              <>
                <div className="mobile-user-info">
                  <img 
                    src={localStorage.getItem('userAvatar') || '/default-avatar.png'} 
                    alt="Profile" 
                    className="mobile-user-avatar"
                  />
                  <span>{localStorage.getItem('userEmail') || 'User'}</span>
                </div>
                <button 
                  onClick={() => { handleLogout(); handleLinkClick(); }}
                  className="btn-logout-mobile"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-login-mobile" onClick={handleLinkClick}>
                  Sign In
                </Link>
                <button onClick={handleStartClick} className="btn-start-mobile">
                  Start with us
                </button>
              </>
            )}
          </div>
        </div>

        {/* Desktop-only Auth Buttons */}
        <div className="navbar-actions">
          {isAuthenticated ? (
            <div className="user-menu" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <img 
                src={localStorage.getItem('userAvatar') || '/default-avatar.png'} 
                alt="Profile" 
                className="user-avatar"
                style={{width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer'}}
                onClick={() => navigate(userRole === 'operator' ? '/operators' : '/dashboard')}
              />
              <button 
                onClick={handleLogout} 
                className="btn-login"
                style={{border: '1px solid #2d7a3e', background: 'transparent', color: '#2d7a3e'}}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>Sign In</Link>
              <button onClick={handleStartClick} className="btn-primary btn-start">
                Start with us
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar