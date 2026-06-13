import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  Star, 
  MapPin, 
  CheckCircle, 
  MessageSquare, 
  Calendar, 
  ChevronRight, 
  ArrowLeft, 
  LogOut 
} from 'lucide-react'
import './OperatorProfile.css'

// Mock operator data
const MOCK_OPERATOR = {
  id: '1',
  name: 'Savanna Explorers Safaris',
  location: 'Nairobi, Kenya',
  joined: 'May 2022',
  rating: 4.8,
  reviewCount: 125,
  bookings: '250+',
  verified: true,
  avatar: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200',
  coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
  specialties: 'Wildlife Safaris',
  experience: '5+ Years',
  languages: 'English, Swahili',
  teamSize: '15 Guides',
  responseTime: 'Within 2 hrs',
  about: 'We are a local Kenya-based tour operator specialising in unforgettable safari experiences. Our passionate guides and carefully curated itineraries ensure you experience the best of Africa\'s wildlife and culture.',
  features: [
    'Local & experienced guides',
    'Customisable safari packages',
    '24/7 support during your trip'
  ],
  services: [
    'Safari Tours',
    'Wildlife Experiences',
    'Cultural Tours',
    'Adventure Trips',
    'Airport Transfers',
    'Hotel Bookings'
  ],
  attractions: [
    {
      id: 1,
      name: 'Masai Mara Reserve',
      location: 'Narok, Kenya',
      price: 26,
      image: 'https://th.bing.com/th/id/R.926bdf7b69c868abfd0f0f310f938c82?rik=rteX5ToErRI5vg&pid=ImgRaw&r=0'
    },
    {
      id: 2,
      name: 'Amboseli National Park',
      location: 'Kajiado, Kenya',
      price: 33,
      image: 'https://tse3.mm.bing.net/th/id/OIP.f81Nn1WxFk77oi2RrxEvYAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 3,
      name: 'Nairobi National Park',
      location: 'Nairobi, Kenya',
      price: 27,
      image: 'https://tse1.mm.bing.net/th/id/OIP.7G9NRxg5QVof_jmbUmjRgAHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3https://www.arcadiasafaris.com/wp-content/uploads/2023/08/Nairobi-National-Park-giraffe-with-city-in-background.jpg'
    },
    {
      id: 4,
      name: 'Lake Nakuru National Park',
      location: 'Nakuru, Kenya',
      price: 34,
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400'
    },
    {
      id: 5,
      name: 'Tsavo East National Park',
      location: 'Tsavo, Kenya',
      price: 8,
      image: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=400'
    }
  ]
}

const OperatorProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // In real app, fetch by ID. Here we use mock data
  const operator = MOCK_OPERATOR

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userAvatar')
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="operator-profile-page">
      {/* Top Navigation Bar */}
      <div className="profile-top-nav">
        <button 
          className="nav-btn back-btn" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} /> Back
        </button>
        
        <div className="nav-actions">
          <Link to="/support" className="nav-link">Help</Link>
          <button 
            className="nav-btn logout-btn" 
            onClick={handleLogout}
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>

      {/* Cover Header */}
      <div className="profile-cover">
        <img src={operator.coverImage} alt={operator.name} className="cover-image" />
        <div className="cover-overlay" />
      </div>

      {/* Profile Header Info */}
      <div className="profile-header">
        <div className="profile-header-content">
          <div className="profile-avatar-section">
            <img src={operator.avatar} alt={operator.name} className="profile-avatar" />
            <div className="profile-info">
              <div className="profile-name-row">
                <h1>{operator.name}</h1>
                {operator.verified && (
                  <span className="verified-badge">
                    <CheckCircle size={14} /> Verified Operator
                  </span>
                )}
              </div>
              <div className="profile-meta">
                <span><MapPin size={14} /> {operator.location}</span>
                <span>Joined {operator.joined}</span>
                <span><Star size={14} className="star-icon" /> {operator.rating} ({operator.reviewCount} reviews)</span>
                <span>{operator.bookings} Bookings</span>
              </div>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-message">
              <MessageSquare size={16} /> Message
            </button>
            <button className="btn-book-experience">
              <Calendar size={16} /> Book Experience
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="profile-quick-stats">
        <div className="quick-stat">
          <span className="quick-stat-label">Specialises in</span>
          <span className="quick-stat-value">{operator.specialties}</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-label">Experience</span>
          <span className="quick-stat-value">{operator.experience}</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-label">Languages</span>
          <span className="quick-stat-value">{operator.languages}</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-label">Team Size</span>
          <span className="quick-stat-value">{operator.teamSize}</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-label">Response Time</span>
          <span className="quick-stat-value">{operator.responseTime}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        <div className="profile-main">
          {/* About Section */}
          <div className="profile-section">
            <h2>About {operator.name}</h2>
            <p>{operator.about}</p>
            <ul className="feature-list">
              {operator.features.map((feature, index) => (
                <li key={index}>
                  <CheckCircle size={16} className="check-icon" /> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Top Attractions */}
          <div className="profile-section">
            <div className="section-header">
              <h2>Top Attractions We Offer</h2>
              <button className="view-all-btn" onClick={() => navigate('/tours')}>
                View All ({operator.attractions.length}) <ChevronRight size={16} />
              </button>
            </div>
            <div className="attractions-grid">
              {operator.attractions.map((attraction) => (
                <div key={attraction.id} className="attraction-card" onClick={() => navigate(`/tours/${attraction.id}`)}>
                  <img src={attraction.image} alt={attraction.name} />
                  <div className="attraction-info">
                    <h3>{attraction.name}</h3>
                    <p className="attraction-location">{attraction.location}</p>
                    <p className="attraction-price">USDT {attraction.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="profile-sidebar">
          <div className="profile-section">
            <h3>What We Offer</h3>
            <div className="services-grid">
              {operator.services.map((service, index) => (
                <div key={index} className="service-tag">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatorProfile