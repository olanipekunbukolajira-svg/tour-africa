import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, FileText, Syringe, CreditCard, Check, ChevronRight, AlertCircle } from 'lucide-react'
import './TravelRequirements.css'

function TravelRequirementsPage() {
  const [activeTab, setActiveTab] = useState('visa')

  const tabs = [
    { id: 'visa', icon: <FileText size={18} />, label: 'Visa Requirements' },
    { id: 'health', icon: <Syringe size={18} />, label: 'Health & Vaccines' },
    { id: 'documents', icon: <Plane size={18} />, label: 'Travel Documents' },
    { id: 'insurance', icon: <CreditCard size={18} />, label: 'Insurance' },
  ]

  const requirements = {
    visa: [
      { title: 'Tourist Visa', desc: 'Most African countries offer visa-on-arrival or e-visa for tourists.', status: 'required' },
      { title: 'Passport Validity', desc: 'Your passport must be valid for at least 6 months beyond your travel dates.', status: 'required' },
      { title: 'Yellow Fever Certificate', desc: 'Required for entry into many African countries.', status: 'required' },
      { title: 'Return Ticket', desc: 'Proof of onward or return travel may be required.', status: 'recommended' },
    ],
    health: [
      { title: 'Yellow Fever Vaccination', desc: 'Mandatory for most African countries. Get vaccinated at least 10 days before travel.', status: 'required' },
      { title: 'Malaria Prophylaxis', desc: 'Recommended for travel to malaria-endemic regions.', status: 'recommended' },
      { title: 'COVID-19 Requirements', desc: 'Check current entry requirements as they may change.', status: 'check' },
      { title: 'Travel Health Insurance', desc: 'Comprehensive coverage including medical evacuation.', status: 'required' },
    ],
    documents: [
      { title: 'Valid Passport', desc: 'With at least 2 blank pages and 6 months validity.', status: 'required' },
      { title: 'Travel Itinerary', desc: 'Confirmed bookings for accommodation and activities.', status: 'required' },
      { title: 'Emergency Contacts', desc: 'Local embassy contacts and emergency numbers.', status: 'recommended' },
    ],
    insurance: [
      { title: 'Travel Medical Insurance', desc: 'Minimum coverage of $50,000 recommended.', status: 'required' },
      { title: 'Trip Cancellation', desc: 'Covers non-refundable bookings in case of cancellation.', status: 'recommended' },
      { title: 'Baggage Protection', desc: 'Coverage for lost or delayed luggage.', status: 'optional' },
    ]
  }

  return (
    <div className="travel-req-page">
      <div className="page-header">
        <div className="container">
          <h1>Travel Requirements Hub</h1>
          <p>Everything you need to know before your African adventure</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="req-layout">
          {/* Sidebar Tabs */}
          <aside className="req-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </aside>

          {/* Content */}
          <div className="req-content">
            <div className="req-list">
              {requirements[activeTab].map((req, i) => (
                <div key={i} className={`req-item ${req.status}`}>
                  <div className="req-status-icon">
                    {req.status === 'required' && <AlertCircle size={20} color="#dc2626" />}
                    {req.status === 'recommended' && <Check size={20} color="#2e7d32" />}
                    {req.status === 'optional' && <Check size={20} color="#666" />}
                    {req.status === 'check' && <AlertCircle size={20} color="#f59e0b" />}
                  </div>
                  <div className="req-info">
                    <div className="req-header">
                      <h3>{req.title}</h3>
                      <span className={`req-badge ${req.status}`}>{req.status}</span>
                    </div>
                    <p>{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="req-cta">
              <h3>Need Help With Your Travel Documents?</h3>
              <p>Our travel experts can assist you with visa applications and travel preparations.</p>
              <Link to="/destinations" className="btn-primary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelRequirementsPage
