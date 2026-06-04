import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Wallet, Building2, Smartphone, Check, ChevronRight, Shield } from 'lucide-react'
import './Payment.css'

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [step, setStep] = useState(3)

  const steps = ['Select', 'Details', 'Payment', 'Confirm']

  const paymentMethods = [
    { id: 'card', icon: <CreditCard size={20} />, label: 'Credit/Debit Card' },
    { id: 'bank', icon: <Building2 size={20} />, label: 'Bank Transfer' },
    { id: 'wallet', icon: <Wallet size={20} />, label: 'Digital Wallet' },
    { id: 'mobile', icon: <Smartphone size={20} />, label: 'Mobile Money' },
  ]

  return (
    <div className="payment-page">
      <div className="container payment-container">
        {/* Progress Steps */}
        <div className="payment-progress">
          {steps.map((s, i) => (
            <div key={i} className={`progress-step ${i + 1 <= step ? 'active' : ''} ${i + 1 === step ? 'current' : ''}`}>
              <div className="step-circle">
                {i + 1 < step ? <Check size={14} /> : i + 1}
              </div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        <div className="payment-layout">
          {/* Payment Form */}
          <div className="payment-form-section">
            <h2>Select Payment Method</h2>

            <div className="payment-methods">
              {paymentMethods.map(method => (
                <button
                  key={method.id}
                  className={`payment-method ${paymentMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  {method.icon}
                  <span>{method.label}</span>
                </button>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div className="card-form">
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div className="payment-summary-box">
              <h3>Trip Summary</h3>
              <div className="summary-row">
                <span>Serengeti Safari Package</span>
                <span>$1,299</span>
              </div>
              <div className="summary-row">
                <span>Travel Insurance</span>
                <span>$45</span>
              </div>
              <div className="summary-row">
                <span>Service Fee</span>
                <span>$25</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>$1,369</span>
              </div>
            </div>

            <div className="secure-note">
              <Shield size={16} />
              <span>Your payment is secured with 256-bit SSL encryption</span>
            </div>

            <Link to="/payment/confirmation" className="btn-primary payment-submit">
              Pay $1,369 Securely <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
