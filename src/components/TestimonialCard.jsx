import { Star, Quote } from 'lucide-react'
import './TestimonialCard.css'

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">
        <Quote size={24} color="#1a4d2e" />
      </div>
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < testimonial.rating ? '#f59e0b' : 'none'}
            color={i < testimonial.rating ? '#f59e0b' : '#e0e0e0'}
          />
        ))}
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.trip}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
