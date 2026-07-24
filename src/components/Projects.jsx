import React, { useEffect, useState } from 'react';
import useReveal from '../useReveal.js';
import { projects } from '../data/content.js';

function ProjectCard({ project, onOpen }) {
  const ref = useReveal();
  return (
    <article className="project-card reveal" ref={ref} onClick={() => onOpen(project)}>
      <div className="browser-bar"><i /><i /><i /><span className="url">{project.url}</span></div>
      <div
        className="project-preview"
        style={{ '--pc1': project.accent[0], '--pc2': project.accent[1] }}
      >
        <span className="open-indicator">OPEN PROJECT ↗</span>
        <span className="tag">{project.shot}</span>
      </div>
      <div className="project-body">
        <span className="project-status">{project.status}</span>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-cat">{project.cat}</div>
        <p className="project-desc">{project.desc}</p>
        <div className="tech-row">
          {project.tech.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
        </div>
        <div className="project-actions">
          <span className="mini-btn primary">Case Study</span>
          <span className="mini-btn">GitHub</span>
          <span className="mini-btn">Live Demo</span>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;
  const c = project.caseStudy;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-head">
          <div>
            <h3>{project.title}</h3>
            <div className="project-cat">{project.cat}</div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="modal-block"><h4>Problem</h4><p>{c.problem}</p></div>
          <div className="modal-block"><h4>Solution</h4><p>{c.solution}</p></div>
          <div className="modal-block"><h4>Architecture</h4><p>{c.architecture}</p></div>
          <div className="modal-block"><h4>Technology</h4><p>{c.technology}</p></div>
          <div className="modal-block"><h4>Challenges</h4><p>{c.challenges}</p></div>
          <div className="modal-block"><h4>Results</h4><p>{c.results}</p></div>
          <div className="modal-block"><h4>Future Improvements</h4><p>{c.future}</p></div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const titleRef = useReveal();
  const subRef = useReveal();

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Projects // Built In The Real World</div>
        <h2 className="section-title reveal" ref={titleRef}>Case studies, not just repos.</h2>
        <p className="section-sub reveal" ref={subRef}>Four products spanning AI, Sustainability, Industrial Machine Learning, and Accessibility — each built to solve a problem I actually cared about.</p>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
