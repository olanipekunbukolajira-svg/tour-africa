import { WifiOff, RefreshCw } from 'lucide-react'
import './Offline.css'

function Offline() {
  return (
    <div className="offline-page">
      <div className="offline-content">
        <div className="offline-icon">
          <WifiOff size={64} />
        </div>
        <h1>You're Offline</h1>
        <p>It looks like you've lost your internet connection. Some features may not be available until you're back online.</p>
        <button className="btn-primary" onClick={() => window.location.reload()}>
          <RefreshCw size={18} /> Try Again
        </button>
      </div>
    </div>
  )
}

export default Offline
