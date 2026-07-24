import React from 'react';
import useReveal from '../useReveal.js';
import profileImage from '../assets/profile.png';

export default function About() {
  const portraitRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">Player Profile</div>
        <div className="about-grid">
          <div className="reveal" ref={portraitRef}>
            <div className="portrait-frame">
              <span className="corner tl" /><span className="corner br" />
              <img
                src={profileImage}
                alt="Pooja - Computer Science Engineering Student"
                className="profile-image"
              />
            </div>
          </div>
          <div className="about-text reveal" ref={textRef}>
            <h2 className="section-title">Hello! I am Pooja</h2>
            <p>I <strong>build</strong> things that turn ideas into working products.</p>
            <p>My interests lie at the intersection of <strong>software engineering, artificial intelligence, product development, and problem solving.</strong></p>
            <p>From building full-stack applications to developing AI-powered systems and participating in hackathons, I enjoy learning by building things that solve real problems.</p>
            <div className="stat-row">
              <div className="stat-chip"><span className="num">4+</span><span className="lbl">Hackathon Experiences</span></div>
              <div className="stat-chip"><span className="num">10+</span><span className="lbl">Project Ideas Explored</span></div>
              <div className="stat-chip"><span className="num">∞</span><span className="lbl">Problems To Solve</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
