import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Compass, 
  Building2, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  TrendingUp,
  Users,
  Star,
  MapPin,
  CheckCircle2
} from 'lucide-react'
import logo from '../assets/logo.png'
import './StartWithUs.css'

function StartWithUs() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const travelerFeatures = [
    { icon: Globe, text: 'Discover 500+ curated African experiences' },
    { icon: ShieldCheck, text: 'Secure escrow payments & buyer protection' },
    { icon: Star, text: 'Verified reviews from real travelers' },
    { icon: MapPin, text: 'Personalized trip recommendations' },
  ]

  const operatorFeatures = [
    { icon: TrendingUp, text: 'Reach thousands of active travelers' },
    { icon: Users, text: 'Powerful booking management tools' },
    { icon: ShieldCheck, text: 'Guaranteed payouts via escrow' },
    { icon: Star, text: 'Analytics & performance insights' },
  ]

  return (
    <div className="start-page">
      {/* Navbar */}
      <nav className="start-nav">

        <div className="nav-links">
          <Link to="/" className="nav-link">Home page</Link>
          <Link to="/explore" className="nav-link">Experiences</Link>
          <Link to="/start" className="nav-link active">Start With Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="start-hero">
        <div className="hero-content">
          <span className="hero-badge"><img src={logo} alt="TourAfrica" className="nav-logo" /> Join Africa's Premier Travel Platform</span>
          <h1>How would you like to <span className="highlight">get started</span>?</h1>
          <p className="hero-subtitle">
            Whether you're planning your dream safari or growing your tour business, 
            we have the perfect tools for you.
          </p>
        </div>
      </section>

      {/* Role Selection Cards */}
      <section className="role-selection">
        <div className="roles-grid">
          {/* Traveler Card */}
          <div 
            className={`role-card ${hoveredCard === 'traveler' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('traveler')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="role-icon-wrapper traveler-icon">
              <Compass size={20} strokeWidth={1.5} />
            </div>
            <h2>I'm a Traveler</h2>
            <p className="role-description">
              Book unforgettable African adventures with verified operators. 
              Secure payments, real reviews, and personalized recommendations.
            </p>
            
            <div className="role-features">
              {travelerFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <feature.icon size={18} className="feature-icon" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="role-actions">
              <Link to="/user/signin" className="btn-primary traveler-btn">
                Sign In <ArrowRight size={18} />
              </Link>
              <Link to="/user/signup" className="btn-secondary">
                Create Account
              </Link>
            </div>
            
            <div className="role-stats">
              <span><strong>12,400+</strong> happy travelers</span>
            </div>
          </div>

          {/* Divider */}
          <div className="roles-divider">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          {/* Operator Card */}
          <div 
            className={`role-card ${hoveredCard === 'operator' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('operator')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="role-icon-wrapper operator-icon">
              <Building2 size={20} strokeWidth={1.5} />
            </div>
            <h2>I'm an Operator</h2>
            <p className="role-description">
              List your tours, manage bookings, and grow your business. 
              Access powerful tools to reach travelers worldwide.
            </p>
            
            <div className="role-features">
              {operatorFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <feature.icon size={18} className="feature-icon" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="role-actions">
              <Link to="/operator/signin" className="btn-primary operator-btn">
                Sign In <ArrowRight size={18} />
              </Link>
              <Link to="/operator/signup" className="btn-secondary">
                Create Account
              </Link>
            </div>
            
            <div className="role-stats">
              <span><strong>850+</strong> verified operators</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <p className="trust-title">Trusted by travelers and operators across Africa</p>
        <div className="trust-badges">
          <div className="trust-item">
            <ShieldCheck size={24} />
            <span>Secure Escrow</span>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={24} />
            <span>Verified Operators</span>
          </div>
          <div className="trust-item">
            <Star size={24} />
            <span>4.9/5 Rating</span>
          </div>
          <div className="trust-item">
            <Users size={24} />
            <span>24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="start-footer">
        <p>© 2025 TourAfrica. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/help">Help Center</Link>
        </div>
      </footer>
    </div>
  )
}

export default StartWithUs