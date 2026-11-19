import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Hackathons from './components/Hackathons.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function Snapshot() {
  return (
    <section className="snapshot" aria-label="Portfolio highlights">
      <div className="wrap snapshot-grid">
        <div><span className="snapshot-number">04</span><span className="snapshot-label">Featured projects</span></div>
        <div><span className="snapshot-number">03</span><span className="snapshot-label">Hackathon recognitions</span></div>
        <div><span className="snapshot-number">AI +</span><span className="snapshot-label">Full-stack engineering</span></div>
        <div><span className="snapshot-number">01</span><span className="snapshot-label">Accessibility prototype</span></div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Projects />
        <Hackathons />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
