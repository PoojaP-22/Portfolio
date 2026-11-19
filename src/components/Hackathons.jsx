import React from 'react';
import useReveal from '../useReveal.js';
import { hackathons } from '../data/content.js';

export default function Hackathons() {
  const titleRef = useReveal();
  return (
    <section id="hackathons" className="section recognition-section">
      <div className="wrap">
        <div className="section-kicker">03 / BEYOND THE BUILD</div>
        <div className="section-heading-row reveal" ref={titleRef}><div><h2 className="section-title">Built together.<br /><em>Recognised together.</em></h2><p className="section-sub">Hackathons have sharpened how I collaborate, communicate ideas, and deliver under constraints.</p></div><span className="heading-index">TEAMWORK / INITIATIVE / EXECUTION</span></div>
        <div className="recognition-list">
          {hackathons.map((item, i) => <article className="recognition-card" key={item.name}><div className="recognition-info"><div className="recognition-award">RECOGNITION / 0{i + 1}</div><h3>{item.name}</h3><div className="recognition-result">{item.result}{item.prize ? ` · ${item.prize}` : ''}</div><p>{item.desc}</p><div className="recognition-meta"><span>TEAM · {item.team}</span><span>PROJECT · {item.project}</span></div></div><div className="recognition-photos">{item.photos.map((photo, j) => <img src={photo} alt={`${item.name} event photograph ${j + 1}`} loading="lazy" key={photo} />)}</div></article>)}
        </div>
      </div>
    </section>
  );
}
