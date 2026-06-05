import { useState } from 'react'
import { Star, Upload, CheckCircle, Send } from 'lucide-react'
import './Review.css'

function Review() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [review, setReview] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { label: 'Overall Experience', rating: 0 },
    { label: 'Guide Knowledge', rating: 0 },
    { label: 'Accommodation', rating: 0 },
    { label: 'Value for Money', rating: 0 },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="review-page">
        <div className="container review-container">
          <div className="review-success">
            <CheckCircle size={64} color="#2e7d32" />
            <h2>Thank You for Your Review!</h2>
            <p>Your feedback helps us improve and helps other travelers make informed decisions.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="review-page">
      <div className="container review-container">
        <div className="review-header">
          <h1>Leave a Review</h1>
          <p>Share your experience to help other travelers discover amazing African adventures</p>
        </div>

        <div className="review-card">
          <div className="review-trip-info">
            <div className="trip-badge">
              <CheckCircle size={16} />
              <span>Completed Trip</span>
            </div>
            <h3>Serengeti National Park Safari</h3>
            <p>Tanzania • 7 Days • July 2026</p>
          </div>

          <form onSubmit={handleSubmit} className="review-form">
            {/* Overall Rating */}
            <div className="review-section">
              <label>Overall Rating</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    <Star
                      size={32}
                      fill={star <= (hoverRating || rating) ? '#f59e0b' : 'none'}
                      color={star <= (hoverRating || rating) ? '#f59e0b' : '#e0e0e0'}
                    />
                  </button>
                ))}
              </div>
              <span className="rating-label">
                {rating === 1 && 'Poor'}
                {rating === 2 && 'Fair'}
                {rating === 3 && 'Good'}
                {rating === 4 && 'Very Good'}
                {rating === 5 && 'Excellent'}
              </span>
            </div>

            {/* Category Ratings */}
            <div className="review-section">
              <label>Rate Specific Aspects</label>
              <div className="category-ratings">
                {categories.map((cat, i) => (
                  <div key={i} className="category-rating-row">
                    <span>{cat.label}</span>
                    <div className="mini-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={18} fill="#e0e0e0" color="#e0e0e0" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div className="review-section">
              <label>Your Review</label>
              <textarea
                placeholder="Tell us about your experience... What did you love? What could be improved?"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={5}
              />
            </div>
          
            {/* Photo Upload */}
            <div className="review-section">
              <label>Add Photos</label>
              <div className="photo-upload">
                <Upload size={24} />
                <span>Click to upload or drag and drop</span>
                <span className="upload-hint">PNG, JPG up to 10MB</span>
              </div>
            </div>

            <button type="submit" className="btn-primary review-submit">
              <Send size={18} /> Submit Verified Review
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Review
