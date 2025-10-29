const PlatformHero = () => (
  <section className="platform-hero">
    <div>
      <span>Platform</span>
      <h1>Operate like Zillow, tailor-made for India</h1>
      <p>
        HonestHomes SaaS stack combines data ingestion, pricing models, workflow automation, and AI
        copilots so your team can deliver unforgettable real estate journeys.
      </p>
      <div className="hero-actions">
        <button className="primary-btn">Request sandbox</button>
        <button className="ghost-btn">Download product deck</button>
      </div>
    </div>
    <div className="platform-screen">
      <div className="screen-header">
        <span>HonestHomes Command Center</span>
        <span className="status">live</span>
      </div>
      <div className="screen-body">
        <div>
          <h4>Pipeline Overview</h4>
          <p>27 active mandates</p>
        </div>
        <div>
          <h4>AI Signals</h4>
          <ul>
            <li>Price drop detected in HSR Layout</li>
            <li>New launch: Prestige Sunrise, Whitefield</li>
            <li>Top lead intent: Investors from Singapore</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PlatformHero;
