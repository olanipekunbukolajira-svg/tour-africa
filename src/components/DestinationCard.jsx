import { Link } from 'react-router-dom'
import { Star, MapPin } from 'lucide-react'
import './DestinationCard.css'

function DestinationCard({ destination }) {
  return (
    <Link to={`/destination/${destination.id}`} className="destination-card">
      <div className="card-image">
        <img src={destination.image} alt={destination.name} />
        <div className="card-badge">{destination.category}</div>
      </div>
      <div className="card-content">
        <div className="card-location">
          <MapPin size={14} />
          <span>{destination.location}</span>
        </div>
        <h3>{destination.name}</h3>
        <div className="card-footer">
          <div className="card-rating">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <span>{destination.rating}</span>
            <span className="reviews">({destination.reviews})</span>
          </div>
          <div className="card-price">
            <span className="from">From</span>
            <span className="amount">${destination.price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DestinationCard
