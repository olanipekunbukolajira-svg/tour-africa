import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, Calendar, Users, MessageSquare, Settings, LogOut, Star, TrendingUp, DollarSign, CalendarCheck } from 'lucide-react'
import logo from '../assets/logo.png'
import './OperatorsPage.css'

function OperatorsPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'tours', label: 'Tours', icon: CalendarCheck },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  const stats = [
    { label: 'Total Bookings', value: 250, icon: Calendar, change: '+12%' },
    { label: 'Revenue', value: '$12,450', icon: DollarSign, change: '+8%' },
    { label: 'Active Tours', value: 12, icon: TrendingUp, change: '+3' },
    { label: 'Avg Rating', value: 4.8, icon: Star, change: '+0.2' },
  ]

  const recentBookings = [
    { id: 1, customer: 'John Smith', tour: 'Serengeti Safari', date: '2026-06-15', status: 'Confirmed', amount: '$1,200' },
    { id: 2, customer: 'Sarah Johnson', tour: 'Masai Mara', date: '2026-06-18', status: 'Pending', amount: '$950' },
    { id: 3, customer: 'Mike Brown', tour: 'Kilimanjaro Trek', date: '2026-06-20', status: 'Confirmed', amount: '$2,100' },
  ]

  return (
    <div className="operators-page">
      {/* Sidebar */}
      <aside className="operators-sidebar">
        <Link to="/" className="operators-logo">
          <img src={logo} alt="Tour Africa" className="operators-logo-img" />
          <span className="logo-text">Tour Africa</span>
        </Link>
        <nav className="sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>
        <button className="sidebar-logout">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="operators-main">
        <header className="operators-header">
          <h1>Welcome back, Serengeti Explorers Safari</h1>
          <p>Here's what's happening with your tours today</p>
        </header>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-info">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
              <span className="stat-change positive">{stat.change}</span>
            </div>
          ))}
        </div>

        {/* Recent Bookings Table */}
        <div className="operators-section">
          <h2>Recent Bookings</h2>
          <table className="operators-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Tour</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.customer}</td>
                  <td>{booking.tour}</td>
                  <td>{booking.date}</td>
                  <td><span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></td>
                  <td>{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default OperatorsPage