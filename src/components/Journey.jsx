import React from 'react';
import useReveal from '../useReveal.js';
import { journey } from '../data/content.js';

export default function Journey() {
  const ref = useReveal();
  return (
    <section id="journey" className="section journey-section">
      <div className="wrap">
        <div className="section-kicker">05 / THE JOURNEY SO FAR</div>
        <div className="journey-layout">
          <div className="journey-intro reveal" ref={ref}><h2 className="section-title">Always in<br /><em>progress.</em></h2><p>Every project, team, and challenge adds another layer to how I think and build.</p><div className="journey-callout">STAY CURIOUS.<br />KEEP SHIPPING.</div></div>
          <div className="timeline">
            {journey.map((item, i) => <article className="timeline-item" key={item.year}><span className="timeline-marker">{String(i + 1).padStart(2, '0')}</span><div><div className="timeline-year">{item.year}</div><h3>{item.log.replace(/^\[[^\]]+\] > /, '').replaceAll('_', ' ')}</h3><p>{item.desc}</p></div></article>)}
          </div>
        </div>
        <p className="journey-edit-note">Education and experience dates can be added here once finalised.</p>
      </div>
    </section>
  );
}
