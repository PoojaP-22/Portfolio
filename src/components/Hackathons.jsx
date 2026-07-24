import React from 'react';
import useReveal from '../useReveal.js';
import { hackathons } from '../data/content.js';

const TROPHY_COLORS = {
  amber: ['#f2b544', '#c98f2b'],
  cyan: ['#49d9c6', '#2e9c8d'],
  violet: ['#9b8cff', '#6f5fd6'],
};

const RESULT_STYLE = {
  amber: { color: 'var(--amber)', background: 'var(--amber-dim)', borderColor: 'rgba(242,181,68,0.35)' },
  cyan: { color: 'var(--cyan)', background: 'var(--cyan-dim)', borderColor: 'rgba(73,217,198,0.35)' },
  violet: { color: 'var(--violet)', background: 'var(--violet-dim)', borderColor: 'rgba(155,140,255,0.35)' },
};

function Trophy({ color }) {
  const [main, dark] = TROPHY_COLORS[color];
  return (
    <svg className="pixel-trophy" viewBox="0 0 12 12" shapeRendering="crispEdges">
      <rect x="3" y="1" width="6" height="1" fill={main} />
      <rect x="2" y="2" width="8" height="3" fill={main} />
      <rect x="3" y="5" width="6" height="2" fill={main} />
      <rect x="1" y="2" width="1" height="2" fill={dark} />
      <rect x="10" y="2" width="1" height="2" fill={dark} />
      <rect x="4" y="7" width="4" height="1" fill={dark} />
      <rect x="3" y="8" width="6" height="2" fill={dark} />
    </svg>
  );
}

function HackathonCard({ h }) {
  const ref = useReveal();
  const style = { ...RESULT_STYLE[h.resultColor], border: `2px solid ${RESULT_STYLE[h.resultColor].borderColor}` };

  return (
    <div className="ach-card reveal" ref={ref}>
      <div>
        <div className="badge-row">
          <Trophy color={h.resultColor} />
          <span className="ach-result" style={style}>
            {h.result.split('\n').map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>)}
          </span>
        </div>
        {h.sponsor && <div className="ach-sponsor">{h.sponsor}</div>}
        {h.prize && <div className="ach-prize">{h.prize}</div>}

        <h3 className="ach-name">{h.name}</h3>
        <div className="ach-meta">
          <span>📅 {h.date}</span>
          <span>👥 {h.team}</span>
          <span>💡 Project: {h.project}</span>
        </div>
        <p className="ach-desc">{h.desc}</p>
        {h.quote && <p className="ach-quote">{h.quote}</p>}
      </div>
      <div className="photo-grid">
        <div className="photo-placeholder large">{h.photos[0]}</div>
        <div className="photo-placeholder">{h.photos[1]}</div>
        <div className="photo-placeholder">{h.photos[2]}</div>
      </div>
    </div>
  );
}

export default function Hackathons() {
  const titleRef = useReveal();
  const subRef = useReveal();

  return (
    <section id="hackathons">
      <div className="wrap">
        <div className="eyebrow">Achievement Unlocked</div>
        <h2 className="section-title reveal" ref={titleRef}>Hackathon Arena</h2>
        <p className="section-sub reveal" ref={subRef}>Built under pressure, pitched on stage, iterated in real time. Replace the frames below with photos from each event.</p>

        <div className="ach-wall">
          {hackathons.map((h, i) => <HackathonCard h={h} key={i} />)}
        </div>
      </div>
    </section>
  );
}
