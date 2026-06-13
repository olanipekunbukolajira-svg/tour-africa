import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Clock, Star, Users } from 'lucide-react'
import '../Tours.css'

// Sample tour data - replace with your actual data/API
const sampleTours = [
  {
    id: 1,
    title: 'Masai Mara Safari Adventure',
    location: 'Kenya',
    description: 'Experience the great migration and witness the Big Five in their natural habitat.',
    duration: '5 days',
    groupSize: '2-8 people',
    rating: 4.9,
    reviews: 128,
    price: 2450,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    featured: true
  },
  {
    id: 2,
    title: 'Serengeti Wildlife Expedition',
    location: 'Tanzania',
    description: 'Explore the endless plains of Serengeti with expert guides and luxury camps.',
    duration: '7 days',
    groupSize: '2-6 people',
    rating: 4.8,
    reviews: 96,
    price: 3200,
    image: 'https://tse3.mm.bing.net/th/id/OIP.Rq-yuyVs1wOvLAg-FxAfIQHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    featured: false
  },
  {
    id: 3,
    title: 'Victoria Falls Adventure',
    location: 'Zimbabwe/Zambia',
    description: 'Witness the mighty Victoria Falls and enjoy thrilling adventure activities.',
    duration: '4 days',
    groupSize: '2-10 people',
    rating: 4.7,
    reviews: 84,
    price: 1800,
    image: 'https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?w=800',
    featured: false
  },
  {
    id: 4,
    title: 'Cape Town & Garden Route',
    location: 'South Africa',
    description: 'Discover the beauty of Cape Town and the scenic Garden Route coastline.',
    duration: '8 days',
    groupSize: '2-12 people',
    rating: 4.9,
    reviews: 156,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
    featured: true
  },
  {
    id: 5,
    title: 'Gorilla Trekking in Rwanda',
    location: 'Rwanda',
    description: 'Get up close with endangered mountain gorillas in Volcanoes National Park.',
    duration: '3 days',
    groupSize: '2-6 people',
    rating: 5.0,
    reviews: 72,
    price: 4500,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    featured: false
  },
  {
    id: 6,
    title: 'Pyramids & Nile Cruise',
    location: 'Egypt',
    description: 'Explore ancient pyramids and cruise the Nile in ultimate luxury.',
    duration: '10 days',
    groupSize: '4-20 people',
    rating: 4.6,
    reviews: 203,
    price: 3800,
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
    featured: false
  }
]

function Tours() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredTours, setFilteredTours] = useState(sampleTours)

  const handleSearch = (e) => {
    e.preventDefault()
    const query = searchQuery.toLowerCase()
    const filtered = sampleTours.filter(tour => 
      tour.title.toLowerCase().includes(query) ||
      tour.location.toLowerCase().includes(query) ||
      tour.description.toLowerCase().includes(query)
    )
    setFilteredTours(filtered)
  }

  const handleClear = () => {
    setSearchQuery('')
    setFilteredTours(sampleTours)
  }

  return (
    <div className="tours-page">
      <div className="tours-container">
        <h1>Explore African Tours</h1>
        
        {/* Search Section */}
        <div className="search-section">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search tours by name, location, or activity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-search">Search</button>
            {searchQuery && (
              <button type="button" className="btn-clear" onClick={handleClear}>
                Clear
              </button>
            )}
          </form>
        </div>

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <div className="tours-grid">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="tour-card">
                <div className="tour-image-wrapper">
                  <img src={tour.image} alt={tour.title} className="tour-image" />
                  {tour.featured && <span className="featured-badge">Featured</span>}
                </div>
                <div className="tour-content">
                  <div className="tour-location">
                    <MapPin size={14} />
                    <span>{tour.location}</span>
                  </div>
                  <h3 className="tour-title">{tour.title}</h3>
                  <p className="tour-description">{tour.description}</p>
                  <div className="tour-meta">
                    <span className="meta-item">
                      <Clock size={14} />
                      {tour.duration}
                    </span>
                    <span className="meta-item">
                      <Users size={14} />
                      {tour.groupSize}
                    </span>
                    <span className="meta-item rating">
                      <Star size={14} className="star-filled" />
                      {tour.rating} ({tour.reviews})
                    </span>
                  </div>
                  <div className="tour-footer">
                    <div className="tour-price">
                      <span className="price-amount">${tour.price.toLocaleString()}</span>
                      <span className="price-unit"> / person</span>
                    </div>
                    <Link to={`/tours/${tour.id}`} className="btn-view">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No tours found matching your search.</p>
            <button onClick={handleClear} className="btn-primary">View All Tours</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tours