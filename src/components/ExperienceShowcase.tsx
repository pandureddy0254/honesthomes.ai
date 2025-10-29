const experiences = [
  {
    title: 'Lifestyle fit engine',
    description:
      'Blend commute scores, school access, and community sentiment to surface homes that feel made for your family.',
    highlights: ['Smart commute visualisations', 'Walkability & social vibe indices', 'Neighbourhood advisory concierge'],
    tone: 'sunrise'
  },
  {
    title: 'Investment studio',
    description:
      'Scenario test appreciation, rental yields, and exit timelines with AI-generated playbooks for each asset.',
    highlights: ['Yield & IRR simulations', 'Macro & micro demand signals', 'Portfolio diversification guidance'],
    tone: 'ocean'
  },
  {
    title: 'Documentation autopilot',
    description:
      'Digitise diligence, legal checks, and loan workflows with automated nudges for every stakeholder.',
    highlights: ['Smart checklists with alerts', 'Bank-ready loan packaging', 'RERA compliance vault'],
    tone: 'twilight'
  }
];

const ExperienceShowcase = () => (
  <section className="experience" id="experience">
    <div className="section-heading">
      <span>Experience the difference</span>
      <h2>Rich, human journeys powered by reliable AI</h2>
      <p>
        From early discovery to final handshake, HonestHomes orchestrates every milestone with clarity, empathy, and
        data you can trust.
      </p>
    </div>
    <div className="experience-grid">
      {experiences.map(experience => (
        <article key={experience.title} className={`experience-card ${experience.tone}`}>
          <div className="experience-header">
            <span>{experience.tone === 'sunrise' ? '✨' : experience.tone === 'ocean' ? '📈' : '🗂️'}</span>
            <h3>{experience.title}</h3>
          </div>
          <p>{experience.description}</p>
          <ul>
            {experience.highlights.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default ExperienceShowcase;
