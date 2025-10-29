const metrics = [
  { label: 'Developer partnerships', value: '1200+' },
  { label: 'Verified resale homes', value: '18K+' },
  { label: 'Avg. decision time saved', value: '42 days' },
  { label: 'Customer NPS', value: '73' }
];

const MetricsStrip = () => (
  <section className="metrics-strip">
    {metrics.map(metric => (
      <div key={metric.label}>
        <span>{metric.value}</span>
        <p>{metric.label}</p>
      </div>
    ))}
  </section>
);

export default MetricsStrip;
