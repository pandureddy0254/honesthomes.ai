import PlatformHero from '../components/PlatformHero';
import PlatformFeatures from '../components/PlatformFeatures';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import DashboardShowcase from '../components/DashboardShowcase';

const SaaSPlatformPage = () => {
  return (
    <main className="platform-page">
      <PlatformHero />
      <DashboardShowcase />
      <PlatformFeatures />
      <section className="integration-section">
        <div className="section-heading">
          <span>Integrations & APIs</span>
          <h2>Plug into your existing real estate stack</h2>
          <p>
            REST & GraphQL endpoints with India-first workflows, ready for CRMs, marketing suites, and
            analytics tools. Secure, scalable, and documented for quick rollout.
          </p>
        </div>
        <div className="integration-grid">
          <article>
            <h3>Lead & inventory APIs</h3>
            <p>Sync supply and demand instantly with our webhook-driven inventory mirror.</p>
          </article>
          <article>
            <h3>Pricing intelligence APIs</h3>
            <p>Embed HonestHomes valuation models into your website, app, or partner network.</p>
          </article>
          <article>
            <h3>Analytics connectors</h3>
            <p>Native connectors for Power BI, Looker Studio, and AWS QuickSight dashboards.</p>
          </article>
        </div>
      </section>
      <PricingSection />
      <Testimonials />
      <CtaBanner />
    </main>
  );
};

export default SaaSPlatformPage;
