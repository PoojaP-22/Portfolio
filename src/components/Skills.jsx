import React from 'react';
import useReveal from '../useReveal.js';
import { skills } from '../data/content.js';

const groups = [
  { title: 'Programming', note: 'Languages & foundations', items: ['C++', 'JavaScript', 'Python', 'OOP', 'DSA'] },
  { title: 'Frontend', note: 'Interfaces & experience', items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Backend', note: 'Services & integration', items: ['Spring Boot', 'Node.js', 'REST API'] },
  { title: 'Data & AI', note: 'Storage & intelligent systems', items: ['SQL', 'MongoDB', 'AWS', 'Machine Learning', 'RAG', 'FAISS'] },
  { title: 'Developer tools', note: 'Build, test & collaborate', items: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'] },
  { title: 'Core CS', note: 'Engineering fundamentals', items: ['Computer Networks', 'Operating Systems'] }
];

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section skills-section">
      <div className="wrap">
        <div className="section-kicker">04 / TECHNICAL TOOLKIT</div>
        <div className="section-heading-row reveal" ref={ref}><div><h2 className="section-title">Tools are useful.<br /><em>Foundations matter.</em></h2><p className="section-sub">A practical snapshot of the languages, technologies, and concepts I work with.</p></div></div>
        <div className="skills-grid">
          {groups.map((group, i) => <article className="skill-group" key={group.title}><div className="skill-group-top"><span>0{i + 1}</span><span>{group.note}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.filter(item => item !== 'Python' || skills.some(s => s.name === item)).map(item => <span key={item}>{item}</span>)}</div></article>)}
        </div>
        <p className="skills-note">Skills shown reflect technologies listed across my project work. I’m continuously strengthening depth through hands-on practice.</p>
      </div>
    </section>
  );
}
