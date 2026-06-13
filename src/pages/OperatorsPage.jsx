import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Calendar, 
  CalendarCheck, 
  MapPin, 
  MessageSquare, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Settings, 
  LogOut, 
  Star,
  ChevronRight
} from 'lucide-react'
import logo from '../assets/logo.png'
import './OperatorsPage.css'

function OperatorsPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const navigate = useNavigate()

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: Users },
    { id: 'experiences', label: 'Experiences', icon: CalendarCheck },
    { id: 'attractions', label: 'Attractions', icon: MapPin },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'payouts', label: 'Payouts', icon: TrendingUp },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 3 },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  const stats = [
    { label: 'Total Bookings', value: '250', subtext: '+12% this month', icon: Calendar, positive: true },
    { label: 'Total Earnings', value: '$12,450', subtext: '+18% this month', icon: DollarSign, positive: true },
    { label: 'Active Experiences', value: '12', subtext: '+2 new', icon: TrendingUp, positive: true },
    { label: 'Average Rating', value: '4.8', subtext: 'From 125 reviews', icon: Star, positive: true },
  ]

  const recentBookings = [
    { id: 1, customer: 'John Doe', experience: 'Masai Mara Safari', location: 'Masai Mara, Kenya', date: 'May 31, 2024', status: 'Confirmed', avatar: 'J', color: '#3b82f6' },
    { id: 2, customer: 'Anna Smith', experience: 'Amboseli Wildlife Tour', location: 'Amboseli, Kenya', date: 'May 31, 2024', status: 'Upcoming', avatar: 'A', color: '#ec4899' },
    { id: 3, customer: 'Peter Johnson', experience: 'Nairobi National Park Tour', location: 'Nairobi, Kenya', date: 'May 30, 2024', status: 'Confirmed', avatar: 'P', color: '#10b981' },
    { id: 4, customer: 'Maria Garcia', experience: 'Lake Nakuru Safari', location: 'Lake Nakuru, Kenya', date: 'May 30, 2024', status: 'Completed', avatar: 'M', color: '#f59e0b' },
    { id: 5, customer: 'Kevin Lee', experience: 'Tsavo East Adventure', location: 'Tsavo East, Kenya', date: 'May 29, 2024', status: 'Confirmed', avatar: 'K', color: '#8b5cf6' },
  ]

  const topExperiences = [
    { name: 'Masai Mara Safari', bookings: 85, revenue: '2,210', rating: 4.9 },
    { name: 'Amboseli Wildlife Tour', bookings: 60, revenue: '1,680', rating: 4.8 },
    { name: 'Nairobi National Park Tour', bookings: 45, revenue: '1,125', rating: 4.7 },
    { name: 'Lake Nakuru Safari', bookings: 30, revenue: '780', rating: 4.6 },
    { name: 'Tsavo East Adventure', bookings: 30, revenue: '690', rating: 4.8 },
  ]

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'status-confirmed'
      case 'upcoming': return 'status-upcoming'
      case 'completed': return 'status-completed'
      default: return 'status-default'
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    navigate('/')
  }

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <img src={logo} alt="TourAfrica" className="sidebar-logo" />
          <span>TourAfrica</span>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id)
                if (item.id === 'profile') {
                  navigate('/operator/1')
                }
              }}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {item.badge && <span className="sidebar-badge">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <button className="sidebar-logout" onClick={handleLogout}>
          <LogOut size={18} /> 
          <span>Log Out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Welcome back, Savanna Explorers Safaris! 👋</h1>
            <p>Here's what's happening with your business.</p>
          </div>
          <div className="header-right">
            <div className="date-picker">
              <Calendar size={14} />
              <span>June 1 - June 30, 2026</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
              <p className={`stat-subtext ${stat.positive ? 'positive' : ''}`}>{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="dashboard-row">
          {/* Bookings Overview Chart */}
          <div className="dashboard-section chart-section">
            <div className="section-header">
              <h2>Bookings Overview</h2>
            </div>
            <div className="chart-legend">
              <span className="legend-dot bookings"></span> Bookings
              <span className="legend-dot previous"></span> Previous Period
            </div>
            <div className="chart-container">
              <svg viewBox="0 0 500 180" className="chart-svg" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="45" x2="500" y2="45" stroke="#f0f0f0" strokeWidth="1" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="#f0f0f0" strokeWidth="1" />
                <line x1="0" y1="135" x2="500" y2="135" stroke="#f0f0f0" strokeWidth="1" />
                
                {/* Previous period (dashed) */}
                <polyline
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  points="20,120 100,105 180,115 260,95 340,85 420,75 480,70"
                />
                
                {/* Current bookings (solid green) */}
                <polyline
                  fill="none"
                  stroke="#2d7a3e"
                  strokeWidth="2.5"
                  points="20,130 100,100 180,110 260,80 340,90 420,60 480,50"
                />
                
                {/* Data points */}
                <circle cx="20" cy="130" r="4" fill="#2d7a3e" />
                <circle cx="100" cy="100" r="4" fill="#2d7a3e" />
                <circle cx="180" cy="110" r="4" fill="#2d7a3e" />
                <circle cx="260" cy="80" r="4" fill="#2d7a3e" />
                <circle cx="340" cy="90" r="4" fill="#2d7a3e" />
                <circle cx="420" cy="60" r="4" fill="#2d7a3e" />
                <circle cx="480" cy="50" r="4" fill="#2d7a3e" />
                
                {/* Highlight last point */}
                <circle cx="420" cy="60" r="6" fill="none" stroke="#2d7a3e" strokeWidth="2" />
              </svg>
              <div className="chart-labels">
                <span>May 1</span>
                <span>May 8</span>
                <span>May 15</span>
                <span>May 22</span>
                <span>May 31</span>
              </div>
            </div>
          </div>

          {/* Bookings by Status */}
          <div className="dashboard-section status-section">
            <div className="section-header">
              <h2>Bookings by Status</h2>
            </div>
            <div className="status-chart-wrapper">
              <div className="donut-chart">
                <svg viewBox="0 0 120 120" className="donut-svg">
                  {/* Background ring */}
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#e8f5e9" strokeWidth="14" />
                  {/* Confirmed segment (60%) */}
                  <circle 
                    cx="60" cy="60" r="45" 
                    fill="none" 
                    stroke="#2d7a3e" 
                    strokeWidth="14" 
                    strokeDasharray="169.6 282.7" 
                    strokeLinecap="round" 
                    transform="rotate(-90 60 60)" 
                  />
                  {/* Upcoming segment (24%) */}
                  <circle 
                    cx="60" cy="60" r="45" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="14" 
                    strokeDasharray="67.8 282.7" 
                    strokeDashoffset="-169.6"
                    strokeLinecap="round" 
                    transform="rotate(-90 60 60)" 
                  />
                  {/* Completed segment (12%) */}
                  <circle 
                    cx="60" cy="60" r="45" 
                    fill="none" 
                    stroke="#9ca3af" 
                    strokeWidth="14" 
                    strokeDasharray="33.9 282.7" 
                    strokeDashoffset="-237.4"
                    strokeLinecap="round" 
                    transform="rotate(-90 60 60)" 
                  />
                  {/* Cancelled segment (4%) */}
                  <circle 
                    cx="60" cy="60" r="45" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="14" 
                    strokeDasharray="11.3 282.7" 
                    strokeDashoffset="-271.3"
                    strokeLinecap="round" 
                    transform="rotate(-90 60 60)" 
                  />
                </svg>
                <div className="donut-center">
                  <span className="donut-value">250</span>
                  <span className="donut-label">Total</span>
                </div>
              </div>
              <div className="status-legend">
                <div className="legend-item">
                  <span className="legend-color confirmed"></span>
                  <span className="legend-text">Confirmed</span>
                  <span className="legend-value">150 (60%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color upcoming"></span>
                  <span className="legend-text">Upcoming</span>
                  <span className="legend-value">60 (24%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color completed"></span>
                  <span className="legend-text">Completed</span>
                  <span className="legend-value">30 (12%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color cancelled"></span>
                  <span className="legend-text">Cancelled</span>
                  <span className="legend-value">10 (4%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tables Row */}
        <div className="dashboard-row">
          {/* Top Experiences */}
          <div className="dashboard-section table-section">
            <div className="section-header">
              <h2>Top Experiences</h2>
            </div>
            <table className="dashboard-table experiences-table">
              <thead>
                <tr>
                  <th>EXPERIENCE</th>
                  <th>BOOKINGS</th>
                  <th>REVENUE (USD)</th>
                  <th>RATING</th>
                </tr>
              </thead>
              <tbody>
                {topExperiences.map((exp, index) => (
                  <tr key={index}>
                    <td className="exp-name">{exp.name}</td>
                    <td>{exp.bookings}</td>
                    <td>{exp.revenue}</td>
                    <td>
                      <span className="rating-cell">
                        <Star size={12} fill="#f59e0b" color="#f59e0b" />
                        {exp.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/experiences" className="view-all-link">
              View All Experiences <ChevronRight size={14} />
            </Link>
          </div>

          {/* Recent Bookings */}
          <div className="dashboard-section bookings-section">
            <div className="section-header">
              <h2>Recent Bookings</h2>
            </div>
            <div className="bookings-list">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="booking-item">
                  <div 
                    className="booking-avatar" 
                    style={{ backgroundColor: booking.color }}
                  >
                    {booking.avatar}
                  </div>
                  <div className="booking-info">
                    <p className="booking-name">{booking.customer}</p>
                    <p className="booking-experience">{booking.experience}</p>
                  </div>
                  <div className="booking-meta">
                    <p className="booking-date">{booking.date}</p>
                    <span className={`booking-status ${getStatusClass(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/bookings" className="view-all-link">
              View All Bookings <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OperatorsPage