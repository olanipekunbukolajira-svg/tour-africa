import { useParams, Link } from 'react-router-dom'
import { MapPin, Star, Clock, Users, Check, ChevronRight, Heart, Share2 } from 'lucide-react'
import { destinations } from '../data/destinations'
import familytrip from '../assets/familytrip.png'
import grouptrip from '../assets/grouptrip.png'
import adventuretrip from '../assets/adventuretrip.png'
import roadtrip from '../assets/roadtrip.png'
import './DestinationDetails.css'

function DestinationDetailsPage() {
  const { id } = useParams()
  const destination = destinations.find(d => d.id === parseInt(id)) || destinations[0]

  return (
    <div className="details-page">
      {/* Hero Gallery */}
      <div className="details-hero">
        <div className="hero-gallery">
          <div className="gallery-main">
            <img src={destination.image} alt={destination.name} />
          </div>
          <div className="gallery-side">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7a?w=400" />
            <img src="https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg?auto=compress&w=800" />
            <img src="https://images.unsplash.com/photo-1539650116455-251d9a063595?w=400" />
            <img src="https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?w=400" />
            <img src="https://images.pexels.com/photos/66869/pexels-photo-66869.jpeg?auto=compress&w=800" /> 
          </div>
        </div>
        <div className="gallery-overlay">
          <div className="container gallery-actions">
            <button className="gallery-btn"><Heart size={20} /> Save</button>
            <button className="gallery-btn"><Share2 size={20} /> Share</button>
          </div>
        </div>
      </div>

      <div className="container details-content">
        <div className="details-layout">
          {/* Main Info */}
          <div className="details-main">
            <div className="details-header">
              <div className="details-meta">
                <span className="category-badge">{destination.category}</span>
                <div className="details-rating">
                  <Star size={18} fill="#f59e0b" color="#f59e0b" />
                  <span>{destination.rating}</span>
                  <span className="reviews">({destination.reviews} reviews)</span>
                </div>
              </div>
              <h1>{destination.name}</h1>
              <p className="details-location"><MapPin size={18} /> {destination.location}</p>
            </div>

            <div className="details-quick-info">
              <div className="quick-item">
                <Clock size={20} />
                <span>{destination.duration}</span>
              </div>
              <div className="quick-item">
                <Users size={20} />
                <span>{destination.groupSize}</span>
              </div>
            </div>

            <div className="details-section">
              <h2>About This Experience</h2>
              <p>{destination.description}</p>
            </div>

            <div className="details-section">
              <h2>Highlights</h2>
              <div className="highlights-list">
                {destination.highlights.map((highlight, i) => (
                  <div key={i} className="highlight-item">
                    <Check size={18} color="#2e7d32" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="details-section">
              <h2>What's Included</h2>
              <div className="includes-grid">
                {['Accommodation', 'Meals', 'Transport', 'Guide', 'Park Fees', 'Airport Transfer'].map((item, i) => (
                  <div key={i} className="include-item">
                    <Check size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <aside className="booking-card">
            <div className="booking-price">
              <span className="from">From</span>
              <span className="amount">${destination.price}</span>
              <span className="per">per person</span>
            </div>

            <div className="booking-dates">
              <div className="date-input">
                <label>Check-in</label>
                <input type="date" />
              </div>
              <div className="date-input">
                <label>Check-out</label>
                <input type="date" />
              </div>
            </div>

            <div className="booking-guests">
              <label>Guests</label>
              <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>

            <div className="booking-summary">
              <div className="summary-row">
                <span>${destination.price} x 2 guests</span>
                <span>${destination.price * 2}</span>
              </div>
              <div className="summary-row">
                <span>Service fee</span>
                <span>$50</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${destination.price * 2 + 50}</span>
              </div>
            </div>

            <Link to="/payment" className="btn-primary booking-btn">
              Book Now <ChevronRight size={18} />
            </Link>

            <p className="booking-note">Free cancellation up to 48 hours before your trip</p>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetailsPage
