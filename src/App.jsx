import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Your existing pages
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Explore from './pages/Explore'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Onboarding from './pages/Onboarding'
import PaymentPage from './pages/PaymentPage'
import PaymentConfirmPage from './pages/PaymentConfirmPage'
import Review from './pages/Review'
import Offline from './pages/Offline'
import DashboardPage from './pages/DashboardPage'
import TravelRequirementsPage from './pages/TravelRequirementsPage'
import DestinationDetailsPage from './pages/DestinationDetailsPage'
import OperatorsPage from './pages/OperatorsPage'
import SupportServicesPage from './pages/SupportServicesPage'
import ReferralPage from './pages/ReferralPage'

// NEW: Backend-connected pages
import Tours from './pages/Tours'
import TourDetail from './pages/TourDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import MyBookings from './pages/MyBookings'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              {/* Your existing routes */}
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/payment/confirmation" element={<PaymentConfirmPage />} />
              <Route path="/review" element={<Review />} />
              <Route path="/offline" element={<Offline />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/travel-requirements" element={<TravelRequirementsPage />} />
              <Route path="/destination/:id" element={<DestinationDetailsPage />} />
              <Route path="/operators" element={<OperatorsPage />} />
              <Route path="/support" element={<SupportServicesPage />} />
              <Route path="/referral" element={<ReferralPage />} />

              {/* NEW: Backend API routes */}
              <Route path="/tours" element={<Tours />} />
              <Route path="/tours/:id" element={<TourDetail />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-bookings" element={<MyBookings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App