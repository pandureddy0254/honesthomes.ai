import axios from 'axios';
import type { Listing } from '../store/listingsSlice';

const client = axios.create({
  baseURL: 'https://api.honesthomes.ai/v1',
  timeout: 8000
});

client.interceptors.request.use(config => {
  // Attach auth tokens or localization headers here when integrating with a real backend.
  config.headers = {
    ...config.headers,
    'X-Country': 'IN'
  };
  return config;
});

client.interceptors.response.use(
  response => response,
  error => {
    // Centralized error logging can be attached here.
    return Promise.reject(error);
  }
);

const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Lakefront Residences, Whitefield',
    location: 'Bengaluru, Karnataka',
    price: '₹1.2 Cr onwards',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    tag: 'Hot Launch',
    type: 'buy',
    highlights: ['3 & 4 BHK', 'Smart Home Automation', 'Near upcoming Metro']
  },
  {
    id: '2',
    title: 'Aurum Heights, Gachibowli',
    location: 'Hyderabad, Telangana',
    price: '₹75 L onwards',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    tag: 'Investor Pick',
    type: 'invest',
    highlights: ['8% Rental Yield', 'Managed Co-living', 'RERA Approved']
  },
  {
    id: '3',
    title: 'Palm Grove Villas',
    location: 'North Goa, Goa',
    price: '₹2.9 Cr onwards',
    image: 'https://images.unsplash.com/photo-1512914890250-353c97c9e8a0?auto=format&fit=crop&w=1600&q=80',
    type: 'buy',
    highlights: ['Beachfront', 'Curated Interior Packs', 'Developer Subvention']
  }
];

export const listingsApi = {
  async fetchFeaturedListings() {
    // Swap mock with `return client.get('/listings/featured')` when backend is available.
    return {
      data: mockListings
    };
  }
};

export default client;
