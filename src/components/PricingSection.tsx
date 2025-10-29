const plans = [
  {
    name: 'Growth',
    price: '₹49,000/mo',
    description: 'Best for boutique brokerages and new-age developers',
    perks: ['Up to 10 seats', 'City-level data feeds', 'AI concierge', 'Lead routing automations']
  },
  {
    name: 'Scale',
    price: '₹99,000/mo',
    description: 'Perfect for mid-size teams expanding across metros',
    perks: [
      'Unlimited seats',
      'Developer CRM integrations',
      'Advanced pricing models',
      'Lending partner marketplace'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Talk to us',
    description: 'For national networks and institutional investors',
    perks: [
      'Dedicated data lake',
      'On-premise deployment',
      '24/7 success squad',
      'Custom AI copilots'
    ]
  }
];

const PricingSection = () => (
  <section className="pricing" id="pricing">
    <div className="section-heading">
      <span>Pricing</span>
      <h2>Plans that grow with your portfolio</h2>
    </div>
    <div className="pricing-grid">
      {plans.map(plan => (
        <article key={plan.name}>
          <h3>{plan.name}</h3>
          <p className="price">{plan.price}</p>
          <p className="description">{plan.description}</p>
          <ul>
            {plan.perks.map(perk => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          <button className="primary-btn">Choose plan</button>
        </article>
      ))}
    </div>
  </section>
);

export default PricingSection;
