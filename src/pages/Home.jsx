import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, ChevronDown } from 'lucide-react'
import DestinationCard from '../components/DestinationCard'
import TestimonialCard from '../components/TestimonialCard'
import { destinations, testimonials, categories, stats } from '../data/destinations'
import mapImg from '../assests/map.png'
import './Home.css'

function Home() {
  const featuredDestinations = destinations.slice(0, 3)
  const popularDestinations = destinations.slice(0, 4)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Explore Africa with Confidence</h1>
            <p>"One platform to discover, trust, and book African travel experiences."</p>
            <div className="hero-buttons">
              <Link to="/destinations" className="btn-primary">
                Explore Now <ArrowRight size={18} />
              </Link>
              <Link to="/explore" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className= "map-container">
            <img src={mapImg} alt="Africa map" style={{width: '500%', opacity: 0.5}} />
            <div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Popular Destinations</h2>
            <Link to="/destinations" className="view-all">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="destinations-grid">
            {featuredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Destination Categories</h2>
            <p>Choose your perfect African adventure</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <Link to="/destinations" key={index} className="category-card">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <span className="category-count">{cat.count} tours</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* Why Choose Us */}
<section className="why-us-section section-padding">
  <div className="container">
    <div className="section-header text-center">
      <h2>Why Travel With Us</h2>
      <p>We make your African adventure seamless and memorable</p>
    </div>

    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">
          <img src={mapImg} alt="Map icon" style={{ width: '28px', height: '28px' }} />
        </div>
        <h3>Curated Destinations</h3>
        <p>Hand-picked locations that showcase the best of Africa</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <Users size={28} />
        </div>
        <h3>Expert Guides</h3>
        <p>Local experts with deep knowledge and passion</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <Award size={28} />
        </div>
        <h3>Quality Assured</h3>
        <p>Vetted accommodations and verified experiences</p>
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="testimonials-section section-padding">
  <div className="container">
    <div className="section-header text-center">
      <h2>Loved by Over Thousand Travelers</h2>
      <p>See what our travelers say about their African adventures</p>
    </div>
    <div className="testimonials-grid">
      {testimonials.map(t => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  </div>
</section>


      {/* Gallery Section */}
      <section className="gallery-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Travelers Photo Gallery</h2>
            <p>Real moments from real adventures</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600" alt="Safari" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=400" alt="Morocco" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400" alt="Cape Town" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7a?w=400" alt="Botswana" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1539650116455-251d9a063595?w=400" alt="Egypt" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {[
              'What is included in the tour package?',
              'How do I book a tour?',
              'What is your cancellation policy?',
              'Do you offer travel insurance?',
              'What should I pack for an African safari?'
            ].map((q, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question">
                  <span>{q}</span>
                  <ArrowRight size={18} className="faq-arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
