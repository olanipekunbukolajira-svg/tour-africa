import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react'
import logo from '../assets/logo.png'
import '../Auth.css'

function UserSignUp() {
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
  const navigate = useNavigate()
  // ✅ FIXED: Removed navigate('/login') from here!

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('User sign up:', formData)
    // After successful signup, redirect to signin
    navigate('/user/signin')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-branding">
          <Link to="/start" className="back-link">
            <ArrowLeft size={18} /> Back to selection
          </Link>
          <div className="branding-content">
            <img src={logo} alt="TourAfrica" className="auth-logo" />
            <h2>Start Your African Adventure</h2>
            <p>Join thousands of travelers discovering the magic of Africa with verified local operators.</p>
            <div className="benefits-list">
              {[
                'Secure escrow payments',
                'Verified operator reviews',
                'Personalized recommendations',
                '24/7 trip support'
              ].map((benefit, i) => (
                <div key={i} className="benefit-item">
                  <CheckCircle2 size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <div className="form-header">
            <span className="user-badge">Traveler Account</span>
            <h1>Create Account</h1>
            <p>Join as a traveler — it's free</p>
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
                placeholder="you@example.com"
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
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="password-hint">
                Must contain at least 8 characters, one uppercase, one number
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
                <option value="tz">Tanzania</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            <label className="checkbox-label terms">
              <input 
                type="checkbox" 
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                required
              />
              <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
            </label>

            <button type="submit" className="btn-submit user-submit">
              Create Traveler Account
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/user/signin">Sign in</Link></p>
            <p className="switch-role">
              Are you an operator? <Link to="/operator/signup">Apply here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp