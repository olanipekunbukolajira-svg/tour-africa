import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, ChevronRight, User, Heart, Settings, LogOut, Star } from 'lucide-react'
import './Dashboard.css'

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingTrips = [
    {
      id: 1,
      destination: 'Serengeti National Park',
      location: 'Tanzania',
      dates: '15 Jul - 22 Jul 2026',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400'
    }
  ]

  const pastTrips = [
    {
      id: 2,
      destination: 'Victoria Falls',
      location: 'Zimbabwe',
      dates: '10 Mar - 15 Mar 2026',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?w=400'
    }
  ]

  return (
    <div className="dashboard-page">
      <div className="container dashboard-container">
        <div className="dashboard-layout">
          {/* Sidebar */}
          <aside className="dashboard-sidebar">
            <div className="user-profile">
              <div className="user-avatar">
                <User size={32} />
              </div>
              <h3>John Doe</h3>
              <p>Traveler since 2024</p>
            </div>

            <nav className="dashboard-nav">
              <button className="active">
                <Calendar size={18} /> My Trips
              </button>
              <button>
                <Heart size={18} /> Wishlist
              </button>
              <button>
                <Star size={18} /> Reviews
              </button>
              <button>
                <Settings size={18} /> Settings
              </button>
              <button className="logout">
                <LogOut size={18} /> Sign Out
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="dashboard-main">
            <div className="dashboard-header">
              <h1>My Trips</h1>
              <p>Welcome back, John! Ready for your next adventure?</p>
            </div>

            {/* Stats */}
            <div className="dashboard-stats">
              <div className="stat-card">
                <span className="stat-number">3</span>
                <span className="stat-label">Upcoming Trips</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">12</span>
                <span className="stat-label">Past Adventures</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">5</span>
                <span className="stat-label">Reviews Given</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="dashboard-tabs">
              <button 
                className={activeTab === 'upcoming' ? 'active' : ''}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button 
                className={activeTab === 'past' ? 'active' : ''}
                onClick={() => setActiveTab('past')}
              >
                Past Trips
              </button>
            </div>

            {/* Trip Cards */}
            <div className="trips-list">
              {(activeTab === 'upcoming' ? upcomingTrips : pastTrips).map(trip => (
                <div key={trip.id} className="trip-card">
                  <div className="roadtrip.png-image">
                    <img src={roadtrip.png} alt={trip.destination} />
                    <span className={`trip-status ${trip.status.toLowerCase()}`}>{trip.status}</span>
                  </div>
                  <div className="trip-info">
                    <h3>{trip.destination}</h3>
                    <p><MapPin size={14} /> {trip.location}</p>
                    <p><Calendar size={14} /> {trip.dates}</p>
                  </div>
                  <div className="trip-actions">
                    <Link to="/travel-requirements" className="btn-outline">
                      View Details <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
