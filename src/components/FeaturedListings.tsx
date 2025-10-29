import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const FeaturedListings = () => {
  const { items, status } = useSelector((state: RootState) => state.listings);

  return (
    <section className="featured" id="solutions">
      <div className="section-heading">
        <span>Featured opportunities</span>
        <h2>Handpicked projects & investments</h2>
        <p>
          Algorithmically curated from 1200+ builders with compliance, live availability, and price
          intelligence baked in.
        </p>
      </div>
      <div className="listing-filters">
        {['Family homes', 'Luxury', 'High yield', 'Ready to move'].map(filter => (
          <button key={filter} type="button">
            {filter}
          </button>
        ))}
      </div>
      <div className="listing-grid">
        {status === 'loading' && <p className="loading">Fetching curated properties...</p>}
        {status !== 'loading' &&
          items.map(listing => (
            <article key={listing.id} className="listing-card">
              <div className="image-wrapper">
                <img src={listing.image} alt={listing.title} />
                {listing.tag && <span className="tag">{listing.tag}</span>}
              </div>
              <div className="listing-body">
                <h3>{listing.title}</h3>
                <p className="location">{listing.location}</p>
                <p className="price">{listing.price}</p>
                <ul>
                  {listing.highlights.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button className="ghost-btn">View details</button>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
