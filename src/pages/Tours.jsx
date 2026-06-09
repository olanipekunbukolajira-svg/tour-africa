import { useState } from 'react';
import { useTours } from '../hooks/useTours';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, Users, MapPin } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

// Simple TourCard inline since you may want to style it yourself
const TourCard = ({ tour }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-48 overflow-hidden">
      <img
        src={tour.images[0] || 'https://via.placeholder.com/400x300'}
        alt={tour.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      {tour.featured && (
        <span className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </span>
      )}
    </div>
    <div className="p-5">
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <MapPin className="h-4 w-4 mr-1" />
        <span>{tour.destination}, {tour.country}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{tour.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{tour.duration} days</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>Max {tour.maxGroupSize}</span>
        </div>
        <div className="flex items-center text-yellow-500">
          <Star className="h-4 w-4 mr-1 fill-current" />
          <span>{tour.rating}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-orange-600">${tour.price}</span>
          <span className="text-gray-500 text-sm"> / person</span>
        </div>
        <Link
          to={`/tours/${tour._id}`}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

const Tours = () => {
  const [filters, setFilters] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const { tours, loading, error } = useTours(filters);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({ ...filters, destination: searchInput });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Tours</h1>

      {/* Search & Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <form onSubmit={handleSearch} className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
            Search
          </button>
        </form>
      </div>

      {loading ? <LoadingSpinner /> : error ? (
        <div className="text-center py-12 text-red-600">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => <TourCard key={tour._id} tour={tour} />)}
        </div>
      )}
    </div>
  );
};

export default Tours;