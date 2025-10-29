const metrics = [
  { label: 'Developer partnerships', value: '1200+', change: '+42 this year' },
  { label: 'Verified resale homes', value: '18K+', change: 'Across 54 micro-markets' },
  { label: 'Decision time saved', value: '42 days', change: 'Avg. vs. offline journeys' },
  { label: 'Customer NPS', value: '73', change: 'Top 1% in Indian proptech' }
];

const MetricsStrip = () => (
  <section className="metrics-strip">
    {metrics.map(metric => (
      <article key={metric.label} className="metric-card">
        <span className="metric-value">{metric.value}</span>
        <p className="metric-label">{metric.label}</p>
        <span className="metric-change">{metric.change}</span>
      </article>
    ))}
  </section>
);

export default MetricsStrip;
