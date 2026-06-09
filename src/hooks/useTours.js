import { useState, useEffect } from 'react';
import { toursAPI } from '../services/api';

export const useTours = (filters = {}) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (filters.featured) queryParams.append('featured', 'true');
        if (filters.country) queryParams.append('country', filters.country);
        if (filters.destination) queryParams.append('destination', filters.destination);
        
        const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
        const data = await toursAPI.getAll(query);
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [filters.featured, filters.country, filters.destination]);

  return { tours, loading, error };
};

export const useTour = (id) => {
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        setLoading(true);
        const data = await toursAPI.getById(id);
        setTour(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchTour();
  }, [id]);

  return { tour, loading, error };
};