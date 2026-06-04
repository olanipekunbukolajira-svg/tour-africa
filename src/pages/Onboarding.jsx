import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Compass, Camera, Mountain, Palmtree, Utensils, Music, Heart, ChevronRight } from 'lucide-react'
import logoImg from '../assests/logo.png'
import './Onboarding.css'

function Onboarding() {
  const [step, setStep] = useState(1)
  const [travelerType, setTravelerType] = useState('')
  const [budget, setBudget] = useState(1500)
  const [interests, setInterests] = useState([])

  const travelerTypes = [
    { id: 'adventurer', icon: <Mountain size={24} />, label: 'Adventurer', desc: 'Thrill seeker' },
    { id: 'cultural', icon: <Music size={24} />, label: 'Cultural', desc: 'Art & heritage' },
    { id: 'relaxation', icon: <Palmtree size={24} />, label: 'Relaxation', desc: 'Beach & spa' },
    { id: 'foodie', icon: <Utensils size={24} />, label: 'Foodie', desc: 'Culinary tours' },
    { id: 'photographer', icon: <Camera size={24} />, label: 'Photographer', desc: 'Visual stories' },
    { id: 'explorer', icon: <Compass size={24} />, label: 'Explorer', desc: 'Off the beaten path' },
  ]

  const interestOptions = [
    'Wildlife Safari', 'Beach Getaway', 'Mountain Hiking', 'Cultural Tours',
    'Food & Wine', 'Photography', 'Adventure Sports', 'Historical Sites'
  ]

  const toggleInterest = (interest) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <div className="onboarding-page">
      <div className="container onboarding-container">
        {/* Progress */}
        <div className="onboarding-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${(step / 3) * 100}%`}}></div>
          </div>
          <span className="progress-text">Step {step} of 3</span>
        </div>

        {/* Step 1: Traveler Type */}
        {step === 1 && (
          <div className="onboarding-step">
            <div className="step-header">
              <h2>What kind of traveler are you?</h2>
              <p>Select the option that best describes your travel style</p>
            </div>
            <div className="traveler-grid">
              {travelerTypes.map(type => (
                <button
                  key={type.id}
                  className={`traveler-card ${travelerType === type.id ? 'selected' : ''}`}
                  onClick={() => setTravelerType(type.id)}
                >
                  <div className="traveler-icon">{type.icon}</div>
                  <h3>{type.label}</h3>
                  <span>{type.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Budget */}
        {step === 2 && (
          <div className="onboarding-step">
            <div className="step-header">
              <h2>What's your travel budget?</h2>
              <p>We'll show you trips that match your budget range</p>
            </div>
            <div className="budget-section">
              <div className="budget-display">
                <span className="budget-label">Budget per person</span>
                <span className="budget-amount">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="budget-slider"
              />
              <div className="budget-labels">
                <span>$500</span>
                <span>$5,000+</span>
              </div>
              <div className="budget-presets">
                <button onClick={() => setBudget(1000)} className={budget === 1000 ? 'active' : ''}>Budget</button>
                <button onClick={() => setBudget(2000)} className={budget === 2000 ? 'active' : ''}>Mid-Range</button>
                <button onClick={() => setBudget(4000)} className={budget === 4000 ? 'active' : ''}>Luxury</button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Interests */}
        {step === 3 && (
          <div className="onboarding-step">
            <div className="step-header">
              <h2>What are you interested in?</h2>
              <p>Select all that apply to personalize your recommendations</p>
            </div>
            <div className="interests-grid">
              {interestOptions.map(interest => (
                <button
                  key={interest}
                  className={`interest-chip ${interests.includes(interest) ? 'selected' : ''}`}
                  onClick={() => toggleInterest(interest)}
                >
                  <Heart size={16} />
                  {interest}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="onboarding-nav">
          {step > 1 && (
            <button className="btn-back" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
          {step < 3 ? (
            <button 
              className="btn-primary onboarding-next" 
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && !travelerType}
            >
              Continue <ChevronRight size={18} />
            </button>
          ) : (
            <Link to="/destinations" className="btn-primary onboarding-next">
              Complete <ChevronRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Onboarding
