import React from 'react';
import profile from '../assets/profile.png';

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE DEVELOPER · COMPUTER SCIENCE</p>
          <h1>Turning thoughtful<br /><em>ideas into</em> useful<br />software.</h1>
          <p className="hero-summary">I’m Pooja — a software developer who enjoys building practical products across full-stack engineering, AI-powered applications, and accessible technology.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
            <a className="button button-secondary" href="#contact">Get in touch</a>
          </div>
          <div className="hero-meta"><span className="availability-dot" /> OPEN TO SOFTWARE ENGINEERING INTERNSHIPS & EARLY-CAREER OPPORTUNITIES</div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-topline"><span>PORTFOLIO / 2026</span><span>01 — 06</span></div>
            <div className="portrait-image"><img src={profile} alt="Pooja P." /></div>
            <div className="portrait-caption"><div><strong>Pooja P.</strong><span>Developer · Builder · Learner</span></div><span className="portrait-arrow">↗</span></div>
          </div>
          <div className="floating-note note-top"><span>01</span><strong>Build with purpose.</strong></div>
          <div className="floating-note note-bottom"><span>02</span><strong>Learn by shipping.</strong></div>
          <div className="visual-stamp">PP<br /><small>DEV</small></div>
        </div>
      </div>
      <div className="hero-bottom wrap"><span>BASED IN INDIA</span><span>SCROLL TO EXPLORE ↓</span><span>DESIGNING · BUILDING · ITERATING</span></div>
    </header>
  );
}
