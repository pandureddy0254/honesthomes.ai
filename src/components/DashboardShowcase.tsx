const dashboardScreens = [
  {
    title: 'Command center overview',
    summary: 'Monitor mandates, velocity, and collection health with colour-coded alerts and drill-downs.',
    metrics: [
      { label: 'Active pipelines', value: '27', detail: '10 in launch • 9 resale • 8 rentals' },
      { label: 'Forecast accuracy', value: '96%', detail: 'Backed by live absorption signals' }
    ],
    accent: 'emerald'
  },
  {
    title: 'Revenue intelligence',
    summary: 'Track conversion funnels, commissions, and advisor performance across every channel partner.',
    metrics: [
      { label: 'Qualified leads', value: '1.3K', detail: 'Week-on-week +14%' },
      { label: 'Avg. ticket size', value: '₹1.1Cr', detail: 'Blended primary & resale' }
    ],
    accent: 'indigo'
  },
  {
    title: 'Customer journey monitor',
    summary: 'Spot bottlenecks across discovery, site visits, and closure workflows with AI nudges.',
    metrics: [
      { label: 'Journey health', value: '82 / 100', detail: 'Escalations down 26%' },
      { label: 'Document SLA', value: '6 hrs', detail: 'Auto-routed via compliance bots' }
    ],
    accent: 'amber'
  }
];

const DashboardShowcase = () => (
  <section className="dashboard-showcase" id="dashboards">
    <div className="section-heading">
      <span>Product UI</span>
      <h2>Purpose-built SaaS dashboards for every team</h2>
      <p>
        Give leadership, advisors, and operations a shared, richly visual source of truth that adapts to Indian real
        estate realities in real time.
      </p>
    </div>
    <div className="dashboard-grid">
      {dashboardScreens.map(screen => (
        <article key={screen.title} className={`dashboard-card ${screen.accent}`}>
          <header>
            <span>{screen.title}</span>
            <button type="button">Open live demo</button>
          </header>
          <p>{screen.summary}</p>
          <div className="dashboard-metrics">
            {screen.metrics.map(metric => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
          <footer>
            <span>AI copilots suggest next best actions • Export-ready snapshots</span>
          </footer>
        </article>
      ))}
    </div>
  </section>
);

export default DashboardShowcase;
