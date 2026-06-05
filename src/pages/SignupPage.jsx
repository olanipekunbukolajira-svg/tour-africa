import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Star } from 'lucide-react'
import logoImg from '../assets/logo.png'
import './Auth.css'

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    country: '',
    agreeTerms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup:', formData)
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
            <p>Join 480,000+ travelers discovering Africa with Africas most comprehensive, verified operators, and secure payments.</p>

            <div className="auth-testimonial">
              <p>Booking was so smooth. African Tours connected us with the perfect operator. We couldnt be more grateful.</p>
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
            <h2>Create your account</h2>
            <p className="auth-subtitle">Already have an account? <Link to="/login">Sign in</Link></p>

            <div className="social-login">
              <button className="social-btn google">
                <img src="https://www.google.com/favicon.ico" alt="G" /> Google
              </button>
              <button className="social-btn facebook">
                <img src="https://www.facebook.com/favicon.ico" alt="F" /> Facebook
              </button>
              <button className="social-btn apple">
                <img src="https://www.apple.com/favicon.ico" alt="A" /> Apple
              </button>
            </div>

            <div className="auth-divider">
              <span>or continue with email</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>

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
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Country of Residence</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                >
                  <option value="">Select your country</option>
                  <option value="ng">Nigeria</option>
                  <option value="za">South Africa</option>
                  <option value="ke">Kenya</option>
                  <option value="gh">Ghana</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>

              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                />
                <span>By signing up, you agree to our <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Policy</Link></span>
              </label>

              <button type="submit" className="btn-primary auth-submit">
                Create Account
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage