import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

// Existing pages
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
import TravelRequirementsPage from './pages/TravelRequirementsPage'
import DestinationDetailsPage from './pages/DestinationDetailsPage'
import OperatorsPage from './pages/OperatorsPage'
import SupportServicesPage from './pages/SupportServicesPage'
import ReferralPage from './pages/ReferralPage'

// NEW: Auth & Role-based pages
import StartWithUs from './pages/StartWithUs'
import UserSignIn from './pages/UserSignIn'
import UserSignUp from './pages/UserSignUp'
import OperatorSignIn from './pages/OperatorSignIn'
import OperatorSignUp from './pages/OperatorSignUp'
import Tours from './pages/Tours'
import TourDetail from './pages/TourDetail'
import OperatorProfile from './pages/OperatorProfile'
import UserDashboard from './pages/UserDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              {/* Public */}
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/tours/:id" element={<TourDetail />} />
              <Route path="/destination/:id" element={<DestinationDetailsPage />} />
              <Route path="/support" element={<SupportServicesPage />} />
              <Route path="/referral" element={<ReferralPage />} />

              {/* NEW: Start With Us — Role Selection */}
              <Route path="/start" element={<StartWithUs />} />
              <Route path="/startwithus" element={<StartWithUs />} />

              {/* User Auth */}
              <Route path="/user/signin" element={<UserSignIn />} />
              <Route path="/user/signup" element={<UserSignUp />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              
              {/* Redirect old broken URLs to working ones */}
              <Route path="/loginpage" element={<Navigate to="/login" replace />} />
              <Route path="/signuppage" element={<Navigate to="/signup" replace />} />

              {/* Operator Auth */}
              <Route path="/operator/signin" element={<OperatorSignIn />} />
              <Route path="/operator/signup" element={<OperatorSignUp />} />

              {/* User Dashboard - ONLY UserDashboard component */}
              {/* ✅ FIXED: Removed duplicate DashboardPage route */}
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/payment/confirmation" element={<PaymentConfirmPage />} />
              <Route path="/review" element={<Review />} />
              <Route path="/travel-requirements" element={<TravelRequirementsPage />} />
              <Route path="/offline" element={<Offline />} />

              {/* Operator Dashboard */}
              <Route path="/operators" element={<OperatorsPage />} />
              <Route path="/operator/:id" element={<OperatorProfile />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App