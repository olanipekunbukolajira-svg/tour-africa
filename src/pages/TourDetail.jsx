import { useParams, useNavigate } from 'react-router-dom';
import { useTour } from '../hooks/useTours';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { Star, Clock, Users, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { bookingsAPI } from '../services/api';

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { tour, loading, error } = useTour(id);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login', { state: { from: `/tours/${id}` } });
      return;
    }

    const formData = new FormData(e.target);
    try {
      setBookingLoading(true);
      await bookingsAPI.create({
        tourId: id,
        startDate: formData.get('startDate'),
        numberOfPeople: parseInt(formData.get('numberOfPeople')),
        specialRequests: formData.get('specialRequests'),
        contactInfo: { phone: formData.get('phone') },
      });
      setBookingSuccess(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center py-12 text-red-600">{error}</div>;
  if (!tour) return <div className="text-center py-12">Tour not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
        <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-5 w-5" />
            <span>{tour.destination}, {tour.country}</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{tour.title}</h1>
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />{tour.rating}</span>
            <span className="flex items-center"><Clock className="h-5 w-5 mr-1" />{tour.duration} days</span>
            <span className="flex items-center"><Users className="h-5 w-5 mr-1" />Max {tour.maxGroupSize}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{tour.description}</p>
            <h3 className="text-xl font-bold mb-3">What's Included</h3>
            <ul className="space-y-2">
              {['Professional local guide', 'All entrance fees', 'Transportation', 'Meals as per itinerary', 'Accommodation'].map((item) => (
                <li key={item} className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-orange-600">${tour.price}</span>
              <span className="text-gray-500"> / person</span>
            </div>
          </div>

          {!bookingSuccess ? (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Book This Tour</h3>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <select name="startDate" required className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option value="">Select a date</option>
                    {tour.startDates?.map((date, index) => (
                      <option key={index} value={date}>{new Date(date).toLocaleDateString()}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
                  <input type="number" name="numberOfPeople" min="1" max={tour.maxGroupSize} defaultValue="1" required className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" name="phone" required placeholder="+1234567890" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea name="specialRequests" rows="3" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <button type="submit" disabled={bookingLoading} className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50">
                  {bookingLoading ? 'Processing...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Booking Confirmed!</h3>
              <button onClick={() => navigate('/my-bookings')} className="text-green-700 font-medium hover:underline">View My Bookings</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourDetail;