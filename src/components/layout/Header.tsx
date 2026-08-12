import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav">
          <NavLink className="brand" to="/" onClick={close} aria-label="Anuj Bhatt home">
            <span className="brand-mark">AB</span>
            <span className="brand-copy">ANUJ BHATT<small>SYSTEMS ARCHITECT</small></span>
          </NavLink>
          <nav className="nav-links" aria-label="Primary">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
            ))}
            <NavLink className="nav-cta" to="/contact">Contact ↗</NavLink>
          </nav>
          <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? '×' : '☰'}
          </button>
        </div>
      </header>
      <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="container">
          {navigationItems.map((item) => <NavLink key={item.to} to={item.to} onClick={close}>{item.label}</NavLink>)}
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </div>
      </nav>
    </>
  );
}
