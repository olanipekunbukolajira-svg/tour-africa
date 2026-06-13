import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, Plane, Heart, Calendar, Star, Bell, 
  Settings, HelpCircle, LogOut, CheckCircle2, Clock, MapPin
} from 'lucide-react'
import logo from '../assets/logo.png'
import './UserDashboard.css'

function UserDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user, setUser] = useState({ name: 'Amara', email: '' })
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userEmail = localStorage.getItem('userEmail')
    if (!token) {
      navigate('/login')  // Redirect to /login (which is LoginPage)
      return
    }
    if (userEmail) {
      setUser(prev => ({ ...prev, email: userEmail }))
    }
  }, [navigate])

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'trips', label: 'My Trips', icon: Plane },
    { id: 'saved', label: 'Saved Destinations', icon: Heart },
    { id: 'history', label: 'Booking History', icon: Calendar },
    { id: 'reviews', label: 'My Reviews', icon: Star },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 3 },
    { id: 'settings', label: 'Account Settings', icon: Settings },
  ]

  const stats = [
    { label: 'Upcoming Trips', value: '1', subtext: 'Next: 12 July 2025', icon: Plane, color: '#3b82f6' },
    { label: 'Countries Visited', value: '7', subtext: '3 in Africa', icon: MapPin, color: '#8b5cf6' },
    { label: 'Saved Destinations', value: '23', subtext: '5 new this week', icon: Heart, color: '#ef4444' },
    { label: 'Reviews Written', value: '12', subtext: 'Trusted reviewer', icon: Star, color: '#f59e0b' },
  ]

  const upcomingTrips = [
    {
      id: 1,
      title: 'Serengeti Safari, Tanzania',
      image: '🦁',
      bgColor: '#fef3c7',
      dates: '12 - 19 July 2025',
      travelers: '2 Adults',
      operator: 'Safari Masters Kenya',
      operatorVerified: true,
      ref: 'TA-SER-2025-48291',
      escrow: '$2,544',
      status: 'Confirmed',
      daysAway: 42
    },
    {
      id: 2,
      title: 'Zanzibar Beach Escape',
      image: '🏝️',
      bgColor: '#dbeafe',
      dates: 'September 2025',
      travelers: 'Exploring package options...',
      status: 'Pending',
      daysAway: null
    }
  ]

  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'Safari Masters Kenya confirmed your booking for July 12.',
      detail: 'Check-in details have been sent to your email and WhatsApp.',
      time: '2 hours ago',
      icon: CheckCircle2,
      color: '#22c55e'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Your Serengeti booking payment of $2,544 has been secured in escrow.',
      detail: "You're fully protected until your trip ends.",
      time: '2 hours ago',
      icon: CheckCircle2,
      color: '#3b82f6'
    },
    {
      id: 3,
      type: 'safety',
      title: 'Safety advisory for Tanzania: All clear - Safety score 92/100.',
      detail: 'No concerns for your travel dates in July.',
      time: 'Yesterday',
      icon: Clock,
      color: '#9ca3af'
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Complete your travel checklist for Serengeti.',
      detail: 'Yellow fever certificate required for entry.',
      time: '3 days ago',
      icon: Clock,
      color: '#f59e0b'
    }
  ]

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userAvatar')
    navigate('/')
    window.location.reload()
  }

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'status-confirmed'
      case 'pending': return 'status-pending'
      case 'completed': return 'status-completed'
      default: return 'status-default'
    }
  }

  return (
    <div className="user-dashboard-page">
      <aside className="user-sidebar">
        <div className="sidebar-brand">
          <img src={logo} alt="TourAfrica" className="sidebar-logo" />
          <span>TourAfrica</span>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {item.badge && <span className="sidebar-badge">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <Link to="/support" className="sidebar-help">
            <HelpCircle size={18} />
            <span>Help Center</span>
          </Link>
          <button className="sidebar-logout" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="user-main">
        <header className="user-header">
          <div className="header-greeting">
            <h1>Welcome back, {user.name} 👋</h1>
            <p>You have 1 upcoming trip in 42 days · Your Serengeti safari is confirmed</p>
          </div>
        </header>

        <div className="user-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="user-stat-card">
              <div className="stat-icon-wrapper" style={{ backgroundColor: stat.color + '15', color: stat.color }}>
                <stat.icon size={20} />
              </div>
              <div className="stat-content">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-subtext">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="dashboard-section">
          <div className="section-header">
            <h2>Upcoming Trips</h2>
          </div>
          <div className="trips-list">
            {upcomingTrips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <div className="trip-image" style={{ backgroundColor: trip.bgColor }}>
                  <span className="trip-emoji">{trip.image}</span>
                </div>
                <div className="trip-info">
                  <div className="trip-header">
                    <h3 className="trip-title">{trip.title}</h3>
                    <div className="trip-meta">
                      <span className="trip-dates">📅 {trip.dates}</span>
                      <span className="trip-travelers"> · {trip.travelers}</span>
                      {trip.operator && (
                        <span className="trip-operator">
                          {' · '}{trip.operator}
                          {trip.operatorVerified && <CheckCircle2 size={14} className="verified-icon" />}
                        </span>
                      )}
                    </div>
                    {trip.ref && (
                      <p className="trip-ref">
                        Ref: {trip.ref} · <span className="escrow">{trip.escrow} in Escrow 🔒</span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="trip-status">
                  <span className={`status-badge ${getStatusClass(trip.status)}`}>
                    {trip.status === 'Confirmed' && <CheckCircle2 size={14} />}
                    {trip.status === 'Pending' && <Clock size={14} />}
                    {trip.status}
                  </span>
                  {trip.daysAway && <p className="days-away">{trip.daysAway} days away</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <h2>Recent Notifications</h2>
          </div>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div key={notif.id} className="notification-item">
                <div className="notification-icon" style={{ color: notif.color }}>
                  <notif.icon size={18} />
                </div>
                <div className="notification-content">
                  <p className="notification-title">
                    <span className="notification-dot" style={{ backgroundColor: notif.color }}></span>
                    {notif.title}
                  </p>
                  <p className="notification-detail">{notif.detail}</p>
                  <p className="notification-time">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default UserDashboard