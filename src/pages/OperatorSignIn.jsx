import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, Star } from 'lucide-react';
import logo from '../assets/logo.png';
import './Auth.css';

function OperatorSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Operator sign in:', formData);
      localStorage.setItem('token', 'demo-operator-token');
      localStorage.setItem('userRole', 'operator');
      navigate('/operator/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-branding operator-branding">
          <Link to="/start" className="back-link">
            <ArrowLeft size={18} /> Back to selection
          </Link>
          <div className="branding-content">
            <img src={logo} alt="TourAfrica" className="auth-logo" />
            <h2>Grow Your Tour Business</h2>
            <p>Access powerful tools to manage bookings, reach travelers, and grow your revenue across Africa.</p>
            
            <div className="auth-testimonial">
              <p>"Since joining TourAfrica, our bookings increased by 300%. The platform is incredible for operators."</p>
              <div className="auth-testimonial-author">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="Operator" />
                <div>
                  <span>SavannaExplorers</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="branding-stats">
              <div className="stat">
                <span className="stat-number">850+</span>
                <span className="stat-label">Verified Operators</span>
              </div>
              <div className="stat">
                <span className="stat-number">$2.4M</span>
                <span className="stat-label">Paid Out</span>
              </div>
              <div className="stat">
                <span className="stat-number">48hr</span>
                <span className="stat-label">Avg. Payout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-panel">
          <div className="form-header">
            <span className="operator-badge">Operator Account</span>
            <h1>Operator Sign In</h1>
            <p>Access your operator dashboard</p>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Business Email</label>
              <input 
                type="email" 
                placeholder="business@example.com"
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
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            <button 
              type="submit" 
              className="btn-submit operator-submit"
              disabled={loading}
              style={{opacity: loading ? 0.7 : 1}}
            >
              {loading ? 'Signing in...' : 'Sign In to Account'}
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/operator/signup">Apply as Operator</Link></p>
            <p className="switch-role">
              Are you a traveler? <Link to="/user/signin">Sign in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperatorSignIn;