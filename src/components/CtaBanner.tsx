import { Link } from 'react-router-dom';

const CtaBanner = () => (
  <section className="cta-banner">
    <div>
      <h2>Ready to experience real estate with radical honesty?</h2>
      <p>
        Book a white-glove demo for your brokerage or family office and unlock curated inventory,
        diligence support, and predictive valuations tailored for India.
      </p>
    </div>
    <Link to="/platform" className="primary-btn">
      Launch platform tour
    </Link>
  </section>
);

export default CtaBanner;
