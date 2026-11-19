import React, { useState } from 'react';
import useReveal from '../useReveal.js';
import { projects } from '../data/content.js';

const labels = ['All work', 'AI & data', 'Full-stack', 'Accessibility'];
function categoryFor(project) {
  if (/Braille/i.test(project.title)) return 'Accessibility';
  if (/Legal|Float/i.test(project.title)) return 'AI & data';
  return 'Full-stack';
}

export default function Projects() {
  const titleRef = useReveal();
  const [filter, setFilter] = useState('All work');
  const [selected, setSelected] = useState(null);
  const visible = projects.filter(p => filter === 'All work' || categoryFor(p) === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="wrap">
        <div className="section-kicker">02 / SELECTED WORK</div>
        <div className="section-heading-row reveal" ref={titleRef}>
          <div><h2 className="section-title">Projects with a<br /><em>purpose behind them.</em></h2><p className="section-sub">A selection of products and prototypes I’ve helped design and build.</p></div>
          <span className="heading-index">PORTFOLIO / 2026</span>
        </div>
        <div className="project-filters" role="group" aria-label="Filter projects">
          {labels.map(label => <button key={label} className={filter === label ? 'active' : ''} onClick={() => setFilter(label)}>{label}</button>)}
        </div>
        <div className="project-grid">
          {visible.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-visual">
                <img src={project.shot} alt={`${project.title} application preview`} loading="lazy" />
                <span className="project-number">0{index + 1}</span>
                <span className="project-category">{categoryFor(project)}</span>
              </div>
              <div className="project-content">
                <div className="project-title-row"><h3>{project.title}</h3><span className="project-status">{project.status?.replace('● ', '')}</span></div>
                <p>{project.desc}</p>
                <div className="project-tech">{project.tech.slice(0, 6).map(tech => <span key={tech}>{tech}</span>)}</div>
                <div className="project-footer"><button className="text-link" onClick={() => setSelected(project)}>View case study <span>↗</span></button>{project.url && !project.url.includes('[') && <span className="project-domain">{project.url}</span>}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close case study">×</button><div className="section-kicker">PROJECT CASE STUDY</div><h2 id="case-title">{selected.title}</h2><p className="modal-intro">{selected.desc}</p>{Object.entries(selected.caseStudy || {}).map(([key, value]) => <div className="case-block" key={key}><h3>{key}</h3><p>{value}</p></div>)}<div className="project-tech">{selected.tech.map(t => <span key={t}>{t}</span>)}</div></section></div>}
    </section>
  );
}
