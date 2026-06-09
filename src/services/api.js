const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export const authAPI = {
  register: (userData) => fetchAPI('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  login: (credentials) => fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  getProfile: () => fetchAPI('/auth/profile'),
};

export const toursAPI = {
  getAll: (params = '') => fetchAPI(`/tours${params}`),
  getById: (id) => fetchAPI(`/tours/${id}`),
  getFeatured: () => fetchAPI('/tours?featured=true'),
};

export const bookingsAPI = {
  create: (bookingData) => fetchAPI('/bookings', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  }),
  
  getMyBookings: () => fetchAPI('/bookings/my-bookings'),
};

export default fetchAPI;