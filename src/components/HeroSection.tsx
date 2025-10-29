import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchListings } from '../store/listingsSlice';
import type { AppDispatch } from '../store';

const partnerLogos = ['Godrej', 'Prestige', 'DLF', 'Sobha'];

const HeroSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-pill">Made for Indian buyers & investors</span>
          <h1>
            Discover homes with
            <br />
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
          <div className="hero-trust">
            <div className="avatar-row">
              {partnerLogos.map(name => (
                <span key={name} className="avatar">
                  {name.slice(0, 1)}
                </span>
              ))}
            </div>
            <div>
              <p>Preferred partner for leading developers & advisory teams</p>
              <span>9 metros • 1200+ exclusive mandates</span>
            </div>
          </div>
        </div>
        <div className="hero-visuals">
          <div className="hero-dashboard">
            <header>
              <span>Demand heatmap</span>
              <span className="status">Live sync</span>
            </header>
            <div className="dashboard-body">
              <div className="dashboard-metric">
                <span>Whitefield</span>
                <strong>+18% YoY</strong>
                <small>Absorption momentum</small>
              </div>
              <div className="dashboard-metric">
                <span>HSR Layout</span>
                <strong>₹11.4K</strong>
                <small>Avg. rent per sq.ft</small>
              </div>
              <div className="dashboard-metric">
                <span>Navi Mumbai</span>
                <strong>31 days</strong>
                <small>Inventory turn</small>
              </div>
            </div>
            <footer>
              <span>AI recommendation score</span>
              <div className="score-pill">
                <strong>92</strong>
                <span>Prime investment</span>
              </div>
            </footer>
          </div>
          <div className="hero-tiles">
            <article>
              <h4>Buyer concierge</h4>
              <p>Hyper-personalised micro-journeys with vernacular nudges and financing matchers.</p>
            </article>
            <article>
              <h4>Investment radar</h4>
              <p>Track rentals, launches, and developer risk signals in real time across India.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
