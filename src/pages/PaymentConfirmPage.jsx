import { Link } from 'react-router-dom'
import { CheckCircle, Download, Calendar, MapPin, Users, Mail } from 'lucide-react'
import './PaymentConfirm.css'

function PaymentConfirmPage() {
  return (
    <div className="confirm-page">
      <div className="container confirm-container">
        <div className="confirm-card">
          <div className="confirm-icon">
            <CheckCircle size={64} color="#2e7d32" />
          </div>
          <h1>Booking Confirmed!</h1>
          <p className="confirm-message">
            Your payment has been processed successfully. We've sent a confirmation email with all your booking details.
          </p>

          <div className="booking-details">
            <h3>Booking Details</h3>
            <div className="detail-row">
              <span><Calendar size={16} /> Booking Reference</span>
              <strong>AT-2026-78432</strong>
            </div>
            <div className="detail-row">
              <span><MapPin size={16} /> Destination</span>
              <strong>Serengeti National Park, Tanzania</strong>
            </div>
            <div className="detail-row">
              <span><Calendar size={16} /> Travel Dates</span>
              <strong>15 Jul 2026 - 22 Jul 2026</strong>
            </div>
            <div className="detail-row">
              <span><Users size={16} /> Travelers</span>
              <strong>2 Adults</strong>
            </div>
            <div className="detail-row">
              <span><Mail size={16} /> Confirmation Sent To</span>
              <strong>traveler@email.com</strong>
            </div>
          </div>

          <div className="confirm-actions">
            <button className="btn-outline">
              <Download size={18} /> Download Invoice
            </button>
            <Link to="/dashboard" className="btn-primary">
              View My Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentConfirmPage
