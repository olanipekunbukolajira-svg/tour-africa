import { useState } from 'react'
import { Search, SlidersHorizontal, MapPin } from 'lucide-react'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'
import './Destinations.css'

function Destinations() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 2000])

  const categories = ['All', 'Safari', 'Adventure', 'Culture', 'Road Trip']

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory
    const matchesPrice = dest.price >= priceRange[0] && dest.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="destinations-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Explore Destinations</h1>
          <p>Discover amazing places across Africa</p>
        </div>
      </div>

      <div className="container destinations-layout">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Search</h3>
            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Category</h3>
            <div className="category-filters">
            
              {categories.map(cat => (
                <button
                  key={cat}
                  className={selectedCategory === cat ? 'active' : ''}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
              <div className="price-labels">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h3>Location</h3>
            <div className="location-filters">
              {['Tanzania', 'South Africa', 'Morocco', 'Egypt', 'Botswana'].map(loc => (
                <label key={loc} className="location-checkbox">
                  <input type="checkbox" />
                  <MapPin size={14} />
                  <span>{loc}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="destinations-results">
          <div className="results-header">
            <p>{filteredDestinations.length} destinations found</p>
            <button className="filter-toggle">
              <SlidersHorizontal size={18} /> Filters
            </button>
          </div>
          <div className="destinations-grid">
            {filteredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations
