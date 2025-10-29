import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'active' : undefined;

  return (
    <header className="nav-container">
      <div className="nav-content">
        <Link to="/" className="brand" onClick={closeMenu}>
          HonestHomes<span>.ai</span>
        </Link>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/platform" className={linkClass} onClick={closeMenu}>
            Platform
          </NavLink>
          <a href="#solutions" onClick={closeMenu}>
            Solutions
          </a>
          <a href="#insights" onClick={closeMenu}>
            Insights
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <div className="nav-actions">
          <button className="ghost-btn">Sign in</button>
          <button className="primary-btn">Book a demo</button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
