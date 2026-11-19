import React, { useEffect, useState } from 'react';

const LINKS = [
  ['About', 'about'], ['Projects', 'projects'], ['Recognition', 'hackathons'],
  ['Skills', 'skills'], ['Journey', 'journey'], ['Contact', 'contact']
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <a className="nav-brand" href="#home" aria-label="Pooja P. home"><span className="brand-mark">P.</span><span>POOJA P.</span></a>
      <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? '×' : '☰'}</button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {LINKS.map(([label, id]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>)}
      </ul>
      <a className="nav-cta" href="#contact">LET'S CONNECT <span>↗</span></a>
    </nav>
  );
}
