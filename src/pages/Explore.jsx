import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Camera, Utensils, Mountain } from 'lucide-react'
import familytrip from '../assets/familytrip.png'
import grouptrip from '../assets/grouptrip.png'
import adventuretrip from '../assets/adventuretrip.png'
import roadtrip from '../assets/roadtrip.png'
import './Explore.css'

function Explore() {
  const experiences = [
    {
      icon: <Compass size={32} />,
      title: 'Guided Safaris',
      description: "Expert-led wildlife adventures through Africa's most iconic national parks.",
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600'
    },
    {
      icon: <Camera size={32} />,
      title: 'Photography Tours',
      description: "Capture stunning landscapes and wildlife with professional photography guides.",
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7a?w=600'
    },
    {
      icon: <Utensils size={32} />,
      title: 'Culinary Journeys',
      description: "Taste authentic African cuisine from Moroccan tagines to Ethiopian injera.",
      image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600'
    },
    {
      icon: <Mountain size={32} />,
      title: 'Adventure Expeditions',
      description: "From climbing Kilimanjaro to white-water rafting on the Zambezi.",
      image: 'https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?w=600'
    }
  ]

  return (
    <div className="explore-page">
      <div className="page-header">
        <div className="container">
          <h1>Experiences</h1>
          <p>Curated adventures for every type of traveler</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-image">
                <img src={exp.image} alt={exp.title} />
                <div className="experience-overlay"></div>
              </div>
              <div className="experience-content">
                <div className="experience-icon">{exp.icon}</div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <Link to="/destinations" className="experience-link">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore
