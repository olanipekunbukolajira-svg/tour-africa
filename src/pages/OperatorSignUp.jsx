import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react'
import logo from '../assets/logo.png'
import '../Auth.css'

function OperatorSignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    licenseNumber: '',
    agreeTerms: false
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Operator sign up:', formData)
    navigate('/operator/signin')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-branding operator-branding">
          <Link to="/start" className="back-link">
            <ArrowLeft size={18} /> Back to selection
          </Link>
          <div className="branding-content">
            <img src={logo} alt="TourAfrica" className="auth-logo" />
            <h2>Grow Your Tour Business</h2>
            <p>Join Africa's leading platform and reach thousands of travelers looking for authentic experiences.</p>
            <div className="benefits-list">
              {[
                'Zero upfront fees — pay only when you earn',
                'Secure escrow payment system',
                'Powerful booking management dashboard',
                'Marketing & analytics tools included'
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
            <span className="operator-badge">Operator Account</span>
            <h1>Apply as Operator</h1>
            <p>Business Information — Step 1 of 2</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Business / Company Name</label>
              <input 
                type="text" 
                placeholder="Savanna Explorers Safaris"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contact Person</label>
                <input 
                  type="text" 
                  placeholder="Full name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+254 700 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Business Email</label>
              <input 
                type="email" 
                placeholder="business@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Business Location</label>
              <input 
                type="text" 
                placeholder="Nairobi, Kenya"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Tourism License Number</label>
              <input 
                type="text" 
                placeholder="e.g., KTB/TOU/12345"
                value={formData.licenseNumber}
                onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                required
              />
              <div className="password-hint">
                Your license will be verified within 24-48 hours
              </div>
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
            </div>

            <label className="checkbox-label terms">
              <input 
                type="checkbox" 
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                required
              />
              <span>I confirm my business is licensed and I agree to the <Link to="/operator-terms">Operator Terms</Link></span>
            </label>

            <button type="submit" className="btn-submit operator-submit">
              Submit Application
            </button>
          </form>

          <div className="auth-footer">
            <p>Already approved? <Link to="/operator/signin">Sign in</Link></p>
            <p className="switch-role">
              Looking to book trips? <Link to="/user/signup">Sign up as traveler</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatorSignUp