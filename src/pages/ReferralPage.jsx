import { useState } from 'react'
import { Copy, Check, Share2, Users, Gift, TrendingUp } from 'lucide-react'
import './ReferralPage.css'

function ReferralPage() {
  const [copied, setCopied] = useState(false)
  const referralCode = 'TOURAFRICA25'

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const rewards = [
    { tier: 'Bronze', referrals: 1, reward: '$30', icon: '🥉' },
    { tier: 'Silver', referrals: 3, reward: '$35', icon: '🥈' },
    { tier: 'Gold', referrals: 5, reward: '$75', icon: '🥇' },
    { tier: 'Platinum', referrals: 10, reward: '$150+', icon: '💎' },
  ]

  const stats = [
    { label: 'Total Referrals', value: 24, icon: Users },
    { label: 'Successful', value: 8, icon: Check },
    { label: 'Total Earned', value: '$320', icon: TrendingUp },
    { label: 'Pending', value: '$110', icon: Gift },
  ]

  return (
    <div className="referral-page">
      {/* Hero Banner */}
      <div className="referral-hero">
        <div className="container">
          <div className="referral-hero-content">
            <h1>Travel more. Earn more. Refer & be rewarded!</h1>
            <p>Share your love for African adventures and earn rewards for every friend who books a tour.</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Referral Code Section */}
        <div className="referral-code-box">
          <h3>Your Referral Code</h3>
          <div className="code-display">
            <span className="code-text">{referralCode}</span>
            <button onClick={copyCode} className="btn-copy">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="share-buttons">
            <button className="share-btn"><Share2 size={16} /> Share on WhatsApp</button>
            <button className="share-btn"><Share2 size={16} /> Share on Twitter</button>
            <button className="share-btn"><Share2 size={16} /> Share on Facebook</button>
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Invite Friends</h4>
              <p>Share your unique referral code with friends and family</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>They Book a Trip</h4>
              <p>Your friends book an amazing African adventure using your code</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>You Earn Rewards</h4>
              <p>Get cash rewards credited to your account for every successful booking</p>
            </div>
          </div>
        </div>

        {/* Reward Tiers */}
        <div className="rewards-section">
          <h2>Your Rewards</h2>
          <div className="rewards-grid">
            {rewards.map((reward, index) => (
              <div key={index} className="reward-card">
                <span className="reward-icon">{reward.icon}</span>
                <h4>{reward.tier}</h4>
                <p className="reward-ref">{reward.referrals} Referrals</p>
                <p className="reward-amount">{reward.reward}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="referral-stats">
          <h2>Your Referral Stats</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon size={28} />
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralPage