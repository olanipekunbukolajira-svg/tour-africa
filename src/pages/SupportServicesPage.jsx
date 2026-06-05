import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'
import './SupportServicesPage.css'

function SupportServicesPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    { q: 'How do I book a tour?', a: 'Browse destinations, select your preferred tour, and click "Book Now" to start your reservation.' },
    { q: 'What payment methods are accepted?', a: 'We accept credit cards, PayPal, and bank transfers for all bookings.' },
    { q: 'Can I cancel my booking?', a: 'Yes, cancellations are allowed up to 48 hours before the tour start time for a full refund.' },
    { q: 'How do I become a tour operator?', a: 'Click "Start with us" and complete the operator registration form.' },
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="support-page">
      {/* Hero Section */}
      <div className="support-hero">
        <div className="container">
          <h1>We're here to help you explore Africa with confidence</h1>
          <p>Get in touch with our team for any questions or assistance</p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container">
        <div className="contact-cards">
          <div className="contact-card">
            <MessageCircle size={32} />
            <h3>WhatsApp</h3>
            <p>Chat with us on WhatsApp for quick responses</p>
            <a href="https://wa.me/2348123456789" className="btn-primary">Start Chat</a>
          </div>
          <div className="contact-card">
            <Mail size={32} />
            <h3>Email</h3>
            <p>Send us an email and we'll respond within 24 hours</p>
            <a href="mailto:TourAfrica@gmail.com" className="btn-primary">Send Email</a>
          </div>
          <div className="contact-card">
            <Phone size={32} />
            <h3>Phone</h3>
            <p>Call us directly for urgent matters</p>
            <a href="tel:+2348123456789" className="btn-primary">Call Now</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="support-form-section">
          <h2>Send us a message</h2>
          <form className="support-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="How can we help you?" rows={6} required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.q}
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openFaq === index && <p className="faq-answer">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupportServicesPage