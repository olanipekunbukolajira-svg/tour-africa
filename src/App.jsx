import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
