const features = [
  {
    title: 'Data fusion engine',
    description:
      'Automate ingestion from RERA, developer CRMs, channel partner feeds, and IoT sensors to keep inventory living and breathing.',
    icon: '🧠'
  },
  {
    title: 'Pricing & valuation models',
    description:
      'Blend macro factors, comparables, and HonestHomes AI valuations to answer “what is this worth today?” instantly.',
    icon: '📊'
  },
  {
    title: 'Workflow automation',
    description:
      'Automate diligence, loan processing, and documentation with audit trails that keep compliance teams smiling.',
    icon: '⚙️'
  },
  {
    title: 'AI copilot & concierge',
    description:
      'Surface nudges for your relationship managers, craft hyper-personalised nudges, and offer multilingual chat support.',
    icon: '🤖'
  }
];

const PlatformFeatures = () => (
  <section className="platform-features">
    <div className="section-heading">
      <span>Why teams choose HonestHomes</span>
      <h2>Build, launch, and scale with enterprise-grade tooling</h2>
    </div>
    <div className="feature-grid">
      {features.map(feature => (
        <article key={feature.title}>
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default PlatformFeatures;
