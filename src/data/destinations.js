// Destination images
import serengetiImg from '../assests/image.png'
import adventureImg from '../assests/adventuretrip.png'
import familyImg from '../assests/familytrip.png'
import groupImg from '../assests/grouptrip.png'
import roadtripImg from '../assests/roadtrip.png'
import artImg from '../assests/art.png'

// Category images
import safariCat from '../assests/image.png'
import roadtripCat from '../assests/roadtrip.png'
import adventureCat from '../assests/adventuretrip.png'
import artCat from '../assests/art.png'
import beachCat from '../assests/familytrip.png'
import wellnessCat from '../assests/grouptrip.png'


export const destinations = [
  {
    id: 1,
    name: 'Serengeti National Park',
    location: 'Tanzania',
    category: 'Safari',
    rating: 4.9,
    reviews: 234,
    price: 1299,
    image: serengetiImg,
    description: 'Witness the great migration and experience the ultimate African safari adventure.',
    duration: '7 Days',
    groupSize: '2-12 people',
    highlights: ['Great Migration', 'Big Five Safari', 'Hot Air Balloon Ride', 'Maasai Village Visit']
  },
  {
    id: 2,
    name: 'Victoria Falls',
    location: 'Zimbabwe/Zambia',
    category: 'Adventure',
    rating: 4.8,
    reviews: 189,
    price: 899,
    image: adventureImg,
    description: "Experience the thundering beauty of the world's largest curtain of falling water.",
    duration: '5 Days',
    groupSize: '2-8 people',
    highlights: ["Devil's Pool", 'White Water Rafting', 'Helicopter Tour', 'Sunset Cruise']
  },
  {
    id: 3,
    name: 'Marrakech Medina',
    location: 'Morocco',
    category: 'Culture',
    rating: 4.7,
    reviews: 312,
    price: 699,
    image: artImg,
    description: 'Immerse yourself in the vibrant colors, sounds, and flavors of ancient Morocco.',
    duration: '6 Days',
    groupSize: '2-10 people',
    highlights: ['Souk Shopping', 'Cooking Class', 'Desert Camp', 'Atlas Mountains']
  },
  {
    id: 4,
    name: 'Cape Town & Winelands',
    location: 'South Africa',
    category: 'Road Trip',
    rating: 4.9,
    reviews: 456,
    price: 1099,
    image: familyImg,
    description: 'From Table Mountain to world-class vineyards, discover the jewel of South Africa.',
    duration: '8 Days',
    groupSize: '2-6 people',
    highlights: ['Table Mountain', 'Robben Island', 'Wine Tasting', 'Penguin Beach']
  },
  {
    id: 5,
    name: 'Pyramids of Giza',
    location: 'Egypt',
    category: 'Culture',
    rating: 4.8,
    reviews: 567,
    price: 799,
    image: groupImg,
    description: 'Walk in the footsteps of pharaohs and explore one of the Seven Wonders of the Ancient World.',
    duration: '5 Days',
    groupSize: '2-15 people',
    highlights: ['Pyramid Tour', 'Nile Cruise', 'Sphinx Visit', 'Egyptian Museum']
  },
  {
    id: 6,
    name: 'Okavango Delta',
    location: 'Botswana',
    category: 'Safari',
    rating: 4.9,
    reviews: 145,
    price: 1599,
    image: roadtripImg,
    description: "Explore the world's largest inland delta by mokoro canoe and spot incredible wildlife.",
    duration: '6 Days',
    groupSize: '2-6 people',
    highlights: ['Mokoro Safari', 'Walking Safari', 'Bird Watching', 'Luxury Camp']
  }
]

// ============================================
// CATEGORIES DATA (with images instead of icons)
// ============================================

export const categories = [
  { name: 'Safari', image: safariCat, count: 24 },
  { name: 'Road Trips', image: roadtripCat, count: 18 },
  { name: 'Adventure', image: adventureCat, count: 15 },
  { name: 'Art & Culture', image: artCat, count: 12 },
  { name: 'Beach', image: beachCat, count: 20 },
  { name: 'Wellness', image: wellnessCat, count: 8 }
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    trip: 'Serengeti Safari, Tanzania',
    rating: 5,
    text: 'Absolutely magical experience! Seeing the Great Migration in person was a dream come true. The guides were incredibly knowledgeable and the accommodations were perfect.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 2,
    name: 'James Okafor',
    trip: 'Victoria Falls Adventure',
    rating: 5,
    text: "The Devil's Pool experience was thrilling! African Tours handled everything perfectly from pickup to drop-off. Highly recommend for adventure seekers.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    trip: 'Marrakech Cultural Tour',
    rating: 4,
    text: 'The cooking class in the medina was the highlight of our trip. We learned so much about Moroccan cuisine and culture. Will definitely book again!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  }
]

// ============================================
// STATS
// ============================================

export const stats = [
  { number: '72+', label: 'Popular Destinations' },
  { number: '30k+', label: 'Happy Travelers' },
  { number: '10+', label: 'Years of Experience' }
]