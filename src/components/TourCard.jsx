import { Link } from 'react-router-dom';
import { Star, Clock, Users, MapPin } from 'lucide-react';

const TourCard = ({ tour }) => {
  return (
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
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{tour.title}</h3>
        
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
};

export default TourCard;