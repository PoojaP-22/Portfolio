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

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Hackathons />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}
