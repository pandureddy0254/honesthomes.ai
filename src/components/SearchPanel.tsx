import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updateBudget, updateCity, updatePropertyType } from '../store/userPreferencesSlice';

const cities = ['Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Chennai', 'Delhi NCR', 'Goa'];
const propertyTypes: Array<{ label: string; value: 'apartment' | 'villa' | 'plot' | 'commercial' }> = [
  { label: 'Apartments', value: 'apartment' },
  { label: 'Villas', value: 'villa' },
  { label: 'Plots', value: 'plot' },
  { label: 'Commercial', value: 'commercial' }
];

const SearchPanel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const preferences = useSelector((state: RootState) => state.userPreferences);

  return (
    <section className="search-panel">
      <h2>Tell us how you want to live</h2>
      <div className="search-grid">
        <label>
          City
          <select value={preferences.city} onChange={event => dispatch(updateCity(event.target.value))}>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <label>
          Budget (₹ in lakhs)
          <div className="range-inputs">
            <input
              type="number"
              value={preferences.budgetRange[0]}
              onChange={event =>
                dispatch(updateBudget([Number(event.target.value), preferences.budgetRange[1]]))
              }
            />
            <span>to</span>
            <input
              type="number"
              value={preferences.budgetRange[1]}
              onChange={event =>
                dispatch(updateBudget([preferences.budgetRange[0], Number(event.target.value)]))
              }
            />
          </div>
        </label>
        <label>
          Property type
          <div className="property-type">
            {propertyTypes.map(type => (
              <button
                key={type.value}
                className={preferences.propertyType === type.value ? 'active' : ''}
                onClick={() => dispatch(updatePropertyType(type.value))}
                type="button"
              >
                {type.label}
              </button>
            ))}
          </div>
        </label>
        <button className="primary-btn explore-btn">Start exploring</button>
      </div>
      <p className="search-disclaimer">
        Real-time prices sourced from RERA filings, developer feeds and verified partners in every
        metro.
      </p>
    </section>
  );
};

export default SearchPanel;
