const insights = [
  {
    title: 'Q2 Mumbai micro-market pulse',
    description: 'Track absorption, upcoming supply and price momentum across 54 neighbourhoods.',
    link: '#'
  },
  {
    title: 'Rental yield tracker',
    description: 'Benchmark returns across Bengaluru co-living corridors vs. traditional apartments.',
    link: '#'
  },
  {
    title: 'NRI buying handbook',
    description: 'Step-by-step playbook with FEMA compliance, financing and taxation tips.',
    link: '#'
  }
];

const InsightsSection = () => (
  <section className="insights" id="insights">
    <div className="section-heading">
      <span>Market intelligence</span>
      <h2>Stay ahead of India’s property curve</h2>
      <p>
        Leverage our research collective for real-time city signals, legal clarity, and financing
        support tailored to your journey.
      </p>
    </div>
    <div className="insight-grid">
      {insights.map(item => (
        <article key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link}>Download insight</a>
        </article>
      ))}
    </div>
  </section>
);

export default InsightsSection;
