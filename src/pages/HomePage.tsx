import HeroSection from '../components/HeroSection';
import MetricsStrip from '../components/MetricsStrip';
import SearchPanel from '../components/SearchPanel';
import FeaturedListings from '../components/FeaturedListings';
import InsightsSection from '../components/InsightsSection';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <MetricsStrip />
      <SearchPanel />
      <FeaturedListings />
      <InsightsSection />
      <Testimonials />
      <CtaBanner />
    </main>
  );
};

export default HomePage;
