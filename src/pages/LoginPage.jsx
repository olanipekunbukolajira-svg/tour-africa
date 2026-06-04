import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, MapPin, Star } from 'lucide-react'
import logoImg from '../assests/logo.png'
import './Auth.css'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', formData)
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side - Branding */}
         <div className="auth-branding">
                  <div className="auth-branding-content">
                    <div className="brand-logo">
                      <img src={logoImg} alt="TourAfrica logo" style={{width: '5%', opacity: 0.8}} />
              <span>TourAfrica</span>
            </div>
            <h2>Africa's most trusted travel platform.</h2>
            <p>Join 480,000+ travelers discovering Africa with Africa's most comprehensive, verified operators, and secure payments.</p>

            <div className="auth-testimonial">
              <p>"Booking was so smooth. African Tours connected us with the perfect operator. We couldn't be more grateful."</p>
              <div className="auth-testimonial-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="User" />
                <div>
                  <span>AdventureSeeker</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="auth-stats">
              <div><strong>12K+</strong><span>Travelers</span></div>
              <div><strong>14</strong><span>Countries</span></div>
              <div><strong>4.8★</strong><span>App Store</span></div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-section">
          <div className="auth-form-wrapper">
            <h2>Sign In</h2>
            <p className="auth-subtitle">Welcome back to African Tours</p>

            <div className="social-login">
              <button className="social-btn google">
                <img src="https://www.google.com/favicon.ico" alt="G" /> Continue with Google
              </button>
              <button className="social-btn facebook">
                <img src="https://www.facebook.com/favicon.ico" alt="F" /> Continue with Facebook
              </button>
              <button className="social-btn apple">
                <img src="https://www.apple.com/favicon.ico" alt="A" /> Continue with Apple
              </button>
            </div>

            <div className="auth-divider">
              <span>or continue with email</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/" className="forgot-password">Forgot password?</Link>
              </div>

              <button type="submit" className="btn-primary auth-submit">
                Sign In
              </button>
            </form>

            <p className="auth-switch">
              Don't have an account? <Link to="/signup">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
