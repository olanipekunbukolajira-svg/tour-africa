import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';
import './Auth.css';

function UserSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  // ✅ FIXED: Removed navigate('/dashboard') from here!

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData);
      // Store user info for dashboard
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userRole', 'traveler');
      localStorage.setItem('token', 'demo-token'); // Add this if your login doesn't set it
      navigate('/dashboard');
    } catch (err) {
      setError(err?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-branding">
          <Link to="/start" className="back-link">
            <ArrowLeft size={18} /> Back to selection
          </Link>
          <div className="branding-content">
            <img src={logo} alt="TourAfrica" className="auth-logo" />
            <h2>Welcome Back, Traveler</h2>
            <p>Sign in to manage your trips, view bookings, and discover new adventures across Africa.</p>
            
            <div className="auth-testimonial">
              <p>"Booking was so smooth. TourAfrica connected us with the perfect operator. We couldn't be more grateful."</p>
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

            <div className="branding-stats">
              <div className="stat">
                <span className="stat-number">12,400+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Experiences</span>
              </div>
              <div className="stat">
                <span className="stat-number">14</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <div className="form-header">
            <span className="user-badge">Traveler Account</span>
            <h1>Sign In</h1>
            <p>Enter your details to access your dashboard</p>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <div className="social-login">
            <button className="social-btn google" type="button">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="social-btn facebook" type="button">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
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
                placeholder="you@example.com"
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
              className="btn-submit user-submit"
              disabled={loading}
              style={{opacity: loading ? 0.7 : 1}}
            >
              {loading ? 'Signing in...' : 'Sign In to Account'}
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/user/signup">Create one</Link></p>
            <p className="switch-role">
              Are you an operator? <Link to="/operator/signin">Sign in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignIn;