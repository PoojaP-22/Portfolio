import React from 'react';
import useReveal from '../useReveal.js';
import { journey } from '../data/content.js';

function TimelineItem({ item }) {
  const ref = useReveal();
  const dotStyle = {
    borderColor: `var(--${item.color})`,
    boxShadow: item.glow ? `0 0 10px var(--${item.color})` : 'none',
  };

  return (
    <div className="t-item reveal" ref={ref}>
      <span className="t-dot" style={dotStyle} />
      <div className="t-year">{item.year}</div>
      <div className="t-log">
        {item.ok ? (
          <>
            {item.log.split('STILL_BUILDING')[0]}
            <span className="ok">STILL_BUILDING</span>
          </>
        ) : item.log}
      </div>
      <div className="t-desc">{item.desc}</div>
    </div>
  );
}

export default function Journey() {
  const titleRef = useReveal();
  const subRef = useReveal();

  return (
    <section id="journey">
      <div className="wrap">
        <div className="eyebrow">The Build Log</div>
        <h2 className="section-title reveal" ref={titleRef}>Journey</h2>
        <p className="section-sub reveal" ref={subRef}>A running log, most recent status at the bottom.</p>

        <div className="timeline">
          {journey.map((item) => <TimelineItem item={item} key={item.year} />)}
        </div>
      </div>
    </section>
  );
}
