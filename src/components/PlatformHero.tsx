const PlatformHero = () => (
  <section className="platform-hero">
    <div className="platform-copy">
      <span>Platform</span>
      <h1>Operate like Zillow, tailor-made for India</h1>
      <p>
        HonestHomes SaaS stack combines data ingestion, pricing models, workflow automation, and AI copilots so your team
        can deliver unforgettable real estate journeys.
      </p>
      <ul className="platform-points">
        <li>Plays nicely with your CRM, marketing, and analytics stack</li>
        <li>Elastic data lake with region-wise compliance guardrails</li>
        <li>AI copilots that speak 8 Indian languages</li>
      </ul>
      <div className="hero-actions">
        <button className="primary-btn">Request sandbox</button>
        <button className="ghost-btn">Download product deck</button>
      </div>
    </div>
    <div className="platform-screen">
      <div className="screen-header">
        <span>HonestHomes Command Center</span>
        <span className="status">Live</span>
      </div>
      <div className="screen-body">
        <div className="screen-metric">
          <h4>Pipeline velocity</h4>
          <p>
            <strong>68%</strong>
            <span>Week-on-week growth</span>
          </p>
        </div>
        <div className="screen-insights">
          <h4>AI Signals</h4>
          <ul>
            <li>Price drop detected in HSR Layout</li>
            <li>New launch: Prestige Sunrise, Whitefield</li>
            <li>Top lead intent: Investors from Singapore</li>
          </ul>
        </div>
        <div className="screen-chart">
          <span>Conversions</span>
          <div>
            <span>Lead → Site visit</span>
            <strong>47%</strong>
          </div>
          <div>
            <span>Visit → Booking</span>
            <strong>32%</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlatformHero;
