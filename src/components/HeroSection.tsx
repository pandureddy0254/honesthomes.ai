import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchListings } from '../store/listingsSlice';
import type { AppDispatch } from '../store';

const HeroSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-pill">Made for Indian buyers & investors</span>
        <h1>
          Discover homes with<br />
          <span>trusted intelligence</span>
        </h1>
        <p>
          HonestHomes.ai unifies verified listings, hyperlocal insights, and AI-guided recommendations
          so your next property decision is confident, transparent, and fast.
        </p>
        <div className="hero-actions">
          <Link to="/platform" className="primary-btn">
            Explore the platform
          </Link>
          <a className="ghost-btn" href="#insights">
            View market insights
          </a>
        </div>
        <div className="hero-card">
          <h3>Curated for every ambition</h3>
          <ul>
            <li>Smart filters for NRI & first-time buyers</li>
            <li>Investment dashboards with rental yield projections</li>
            <li>Verified developer partnerships across 9 Indian metros</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
