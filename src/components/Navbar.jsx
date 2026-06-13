// Navbar.jsx
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [operatorsDropdown, setOperatorsDropdown] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  // Check if user is logged in
  const isAuthenticated = !!localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole') || 'traveler'

  // ✅ FIXED: Define isOperatorDashboard BEFORE using it
  const isOperatorDashboard = location.pathname.startsWith('/operator/') && 
    location.pathname !== '/operator/signin' && 
    location.pathname !== '/operator/signup'

  const isUserDashboard = location.pathname === '/dashboard' || 
    location.pathname.startsWith('/user/')

  // Hide navbar on dashboard pages
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
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userAvatar')
    navigate('/')
    window.location.reload()
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
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

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar