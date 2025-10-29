const testimonials = [
  {
    quote:
      'HonestHomes gave us data we could not find anywhere else. Their AI concierge even negotiated perks we didn\'t expect.',
    name: 'Anisha & Karan',
    title: 'Upgrading to a 3BHK in Bengaluru'
  },
  {
    quote:
      'As an NRI, the transparency and compliance checklist saved us from costly mistakes. The dashboard is brilliant.',
    name: 'Rahul Gupta',
    title: 'Investor, Singapore'
  }
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="section-heading">
      <span>Loved by buyers & brokers</span>
      <h2>Stories from the HonestHomes community</h2>
    </div>
    <div className="testimonial-grid">
      {testimonials.map(testimonial => (
        <article key={testimonial.name}>
          <p>“{testimonial.quote}”</p>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.title}</span>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;
