import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Wallet, Building2, Smartphone, Check, ChevronRight, Shield } from 'lucide-react'
import './Payment.css'

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [step, setStep] = useState(3)

  const steps = ['Select', 'Details', 'Payment', 'Confirm']

  const paymentMethods = [
    { id: 'card', icon: <CreditCard size={24} />, label: 'Credit/Debit Card' },
    { id: 'bank', icon: <Building2 size={24} />, label: 'Bank Transfer' },
    { id: 'wallet', icon: <Wallet size={24} />, label: 'Digital Wallet' },
    { id: 'mobile', icon: <Smartphone size={24} />, label: 'Mobile Money' },
  ]

  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* Progress Steps */}
        <div className="payment-progress">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className={`progress-step ${i + 1 <= step ? 'active' : ''} ${i + 1 === step ? 'current' : ''}`}
            >
              <div className="step-circle">
                {i + 1 < step ? <Check size={16} /> : i + 1}
              </div>
              <span className="step-label">{s}</span>
            </div>
          ))}
        </div>

        <div className="payment-layout">
          {/* Payment Form */}
          <div className="payment-form-section">
            <h2 className="payment-title">Select Payment Method</h2>

            <div className="payment-methods">
              {paymentMethods.map(method => (
                <button
                  key={method.id}
                  className={`payment-method ${paymentMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                  type="button"
                >
                  <div className="method-icon">{method.icon}</div>
                  <span className="method-label">{method.label}</span>
                </button>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div className="card-form">
                <div className="form-group">
                  <label>Card Number</label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456" 
                    maxLength="19"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input 
                      type="text" 
                      placeholder="123" 
                      maxLength="3"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="bank-form">
                <div className="form-group">
                  <label>Bank Name</label>
                  <select>
                    <option>Select your bank</option>
                    <option>GTBank</option>
                    <option>Access Bank</option>
                    <option>UBA</option>
                    <option>Zenith Bank</option>
                    <option>First Bank</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Account Number</label>
                  <input type="text" placeholder="Enter account number" />
                </div>
              </div>
            )}

            {paymentMethod === 'wallet' && (
              <div className="wallet-form">
                <div className="form-group">
                  <label>Select Wallet</label>
                  <div className="wallet-options">
                    <button className="wallet-option" type="button">PayPal</button>
                    <button className="wallet-option" type="button">Apple Pay</button>
                    <button className="wallet-option" type="button">Google Pay</button>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'mobile' && (
              <div className="mobile-form">
                <div className="form-group">
                  <label>Mobile Network</label>
                  <select>
                    <option>Select network</option>
                    <option>MTN Mobile Money</option>
                    <option>Airtel Money</option>
                    <option>M-Pesa</option>
                    <option>Orange Money</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+234 800 000 0000" />
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="payment-summary-section">
            <div className="summary-card">
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
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span className="total-amount">$1,369</span>
              </div>
            </div>

            <div className="secure-note">
              <Shield size={18} />
              <span>Your payment is secured with 256-bit SSL encryption</span>
            </div>

            <Link to="/payment/confirmation" className="payment-submit-btn">
              Pay $1,369 Securely <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage