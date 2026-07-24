import React, { useEffect, useState } from 'react';

const LINKS = ['Home', 'Projects', 'Hackathons', 'Skills', 'Journey', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo"><span className="dot" />POOJA.DEV</div>
      <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>☰</button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map((label) => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-status"><span className="pulse" />AVAILABLE TO BUILD</div>
    </nav>
  );
}
