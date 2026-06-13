import { useParams, useNavigate } from 'react-router-dom'
import { MapPin, Clock, Users, Star, Check, Calendar, ArrowLeft } from 'lucide-react'
import '../TourDetail.css'

// All 6 tours data (expanded from your Tours.jsx)
const allTours = [
  {
    id: 1,
    title: 'Masai Mara Safari Adventure',
    location: 'Kenya',
    description: 'Experience the great migration and witness the Big Five in their natural habitat. This carefully curated safari takes you through the heart of Masai Mara with expert guides who know every corner of this magnificent reserve.',
    duration: '5 days',
    groupSize: '2-8 people',
    rating: 4.9,
    reviews: 128,
    price: 2450,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    featured: true,
    includes: [
      'All accommodation in luxury camps',
      'All meals and drinks',
      'Professional safari guide',
      'Park entrance fees',
      'Airport transfers',
      'Game drives in 4x4 vehicle'
    ],
    dates: ['Jul 15-20, 2025', 'Aug 5-10, 2025', 'Sep 12-17, 2025']
  },
  {
    id: 2,
    title: 'Serengeti Wildlife Expedition',
    location: 'Tanzania',
    description: 'Explore the endless plains of Serengeti with expert guides and luxury camps. Witness the great migration and enjoy daily game drives in one of Africa\'s most iconic national parks.',
    duration: '7 days',
    groupSize: '2-6 people',
    rating: 4.8,
    reviews: 96,
    price: 3200,
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120448d?w=1200',
    featured: false,
    includes: [
      'Luxury tented camp accommodation',
      'All meals and beverages',
      'Expert naturalist guide',
      'Conservation fees',
      'Internal flights',
      'Daily game drives'
    ],
    dates: ['Jun 20-27, 2025', 'Jul 10-17, 2025', 'Oct 5-12, 2025']
  },
  {
    id: 3,
    title: 'Victoria Falls Adventure',
    location: 'Zimbabwe/Zambia',
    description: 'Witness the mighty Victoria Falls and enjoy thrilling adventure activities including white water rafting, bungee jumping, and sunset cruises on the Zambezi River.',
    duration: '4 days',
    groupSize: '2-10 people',
    rating: 4.7,
    reviews: 84,
    price: 1800,
    image: 'https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?w=1200',
    featured: false,
    includes: [
      'Boutique hotel accommodation',
      'Breakfast daily',
      'Guided Falls tour',
      'Sunset cruise',
      'Airport transfers',
      'Adventure activity booking assistance'
    ],
    dates: ['May 10-14, 2025', 'Jun 15-19, 2025', 'Aug 20-24, 2025']
  },
  {
    id: 4,
    title: 'Cape Town & Garden Route',
    location: 'South Africa',
    description: 'Discover the beauty of Cape Town and the scenic Garden Route coastline. From Table Mountain to wine country, experience the best of South Africa.',
    duration: '8 days',
    groupSize: '2-12 people',
    rating: 4.9,
    reviews: 156,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200',
    featured: true,
    includes: [
      '4-star hotel accommodation',
      'All breakfasts and select dinners',
      'Private vehicle and driver',
      'Wine tasting tour',
      'Table Mountain cable car',
      'Airport transfers'
    ],
    dates: ['Apr 5-13, 2025', 'Sep 10-18, 2025', 'Nov 15-23, 2025']
  },
  {
    id: 5,
    title: 'Gorilla Trekking in Rwanda',
    location: 'Rwanda',
    description: 'Get up close with endangered mountain gorillas in Volcanoes National Park. A once-in-a-lifetime wildlife experience with luxury lodge accommodation.',
    duration: '3 days',
    groupSize: '2-6 people',
    rating: 5.0,
    reviews: 72,
    price: 4500,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200',
    featured: false,
    includes: [
      'Luxury lodge accommodation',
      'All meals',
      'Gorilla trekking permit',
      'Expert guide',
      'Park fees',
      'Kigali transfers'
    ],
    dates: ['Mar 15-18, 2025', 'Jul 20-23, 2025', 'Dec 10-13, 2025']
  },
  {
    id: 6,
    title: 'Pyramids & Nile Cruise',
    location: 'Egypt',
    description: 'Explore ancient pyramids and cruise the Nile in ultimate luxury. Visit the Great Pyramids, Sphinx, and sail from Luxor to Aswan in style.',
    duration: '10 days',
    groupSize: '4-20 people',
    rating: 4.6,
    reviews: 203,
    price: 3800,
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200',
    featured: false,
    includes: [
      '5-star hotel and cruise cabin',
      'All meals on cruise',
      'Expert Egyptologist guide',
      'All entrance fees',
      'Nile cruise (Luxor-Aswan)',
      'Internal flights'
    ],
    dates: ['Oct 1-11, 2025', 'Nov 5-15, 2025', 'Jan 10-20, 2026']
  }
]

function TourDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const tour = allTours.find(t => t.id === parseInt(id))

  // Handle invalid tour ID
  if (!tour) {
    return (
      <div className="not-found">
        <h2>Tour not found</h2>
        <button onClick={() => navigate('/tours')} className="btn-view">
          Back to Tours
        </button>
      </div>
    )
  }

  return (
    <div className="tour-detail-page">
      {/* Hero */}
      <div className="tour-hero">
        <img src={tour.image} alt={tour.title} />
        <div className="tour-hero-overlay" />
        <div className="tour-hero-content">
          <button 
            className="btn-back" 
            onClick={() => navigate('/tours')}
          >
            <ArrowLeft size={18} /> Back to Tours
          </button>
          <div className="tour-hero-location">
            <MapPin size={18} />
            <span>{tour.location}</span>
          </div>
          <h1>{tour.title}</h1>
          <div className="tour-hero-meta">
            <span>
              <Clock size={16} /> {tour.duration}
            </span>
            <span>
              <Users size={16} /> {tour.groupSize}
            </span>
            <span>
              <Star size={16} className="star-icon" /> {tour.rating} ({tour.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Detail Container */}
      <div className="tour-detail-container">
        <div className="detail-main">
          <div className="detail-section">
            <h2>About This Tour</h2>
            <p>{tour.description}</p>
          </div>

          <div className="detail-section">
            <h3>What's Included</h3>
            <ul className="includes-list">
              {tour.includes.map((item, index) => (
                <li key={index}>
                  <Check size={18} className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h3>Available Dates</h3>
            <div className="dates-list">
              {tour.dates.map((date, index) => (
                <div key={index} className="date-item">
                  <Calendar size={16} />
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tour-sidebar">
          <div className="price-card">
            <span className="price-amount">${tour.price.toLocaleString()}</span>
            <span className="price-unit"> per person</span>
          </div>
          <div className="booking-card">
            <h3>Book This Tour</h3>
            <button 
              className="btn-book"
              onClick={() => navigate('/payment')}
            >
              Book Now
            </button>
            <p className="booking-note">Free cancellation up to 30 days before</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetail