import React from 'react';
import useReveal from '../useReveal.js';

export default function About() {
  const titleRef = useReveal();
  const copyRef = useReveal();
  return (
    <section id="about" className="section about-section">
      <div className="wrap">
        <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
        <div className="about-layout">
          <div className="about-heading reveal" ref={titleRef}>
            <h2 className="section-title">Curiosity is where<br /><em>good engineering</em><br />begins.</h2>
            <p className="about-aside">I like understanding the problem before deciding how to solve it.</p>
          </div>
          <div className="about-copy reveal" ref={copyRef}>
            <p className="about-lead">I’m a Computer Science Engineering student and software developer interested in building technology that makes complex tasks simpler and more accessible.</p>
            <p>My work spans responsive web applications, backend APIs, retrieval-augmented generation, machine learning, and hardware-connected prototypes. I enjoy moving between the product experience and the engineering underneath it — from shaping an interface to thinking through data flow, integration, and reliability.</p>
            <p>Hackathons have also given me opportunities to collaborate under tight timelines, present ideas, and turn early concepts into working prototypes. I’m looking for opportunities where I can contribute, learn from experienced engineers, and grow through real product work.</p>
            <a className="text-link" href="#contact">A little more about what I can bring <span>↗</span></a>
          </div>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Problem-first thinking</h3><p>Understand the user and constraints before reaching for a technology.</p></article>
          <article><span>02</span><h3>End-to-end ownership</h3><p>Connect interfaces, APIs, data, and integrations into a cohesive product.</p></article>
          <article><span>03</span><h3>Continuous learning</h3><p>Experiment, seek feedback, and iterate toward better engineering decisions.</p></article>
        </div>
      </div>
    </section>
  );
}
