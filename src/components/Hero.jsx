import React, { useEffect, useMemo, useState } from 'react';
import pixelArt from '../assets/pixel.png';

const TERM_LINES = [
  { text: '> initializing developer_profile...', cls: '' },
  { text: '> loading projects...', cls: '' },
  { text: '> loading hackathon_wins...', cls: '' },
  { text: '> system_status: READY_TO_BUILD', cls: 'ok', cursor: true },
];

function Keyboard() {
  const keys = useMemo(() => Array.from({ length: 56 }), []);
  const [lit, setLit] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      const picks = new Set();
      while (picks.size < 3) picks.add(Math.floor(Math.random() * keys.length));
      setLit([...picks]);
    }, 260);
    return () => clearInterval(id);
  }, [keys.length]);

  return (
    <div className="keyboard">
      {keys.map((_, i) => (
        <span key={i} className={lit.includes(i) ? 'lit' : ''} />
      ))}
    </div>
  );
}

function Particles() {
  const particles = useMemo(() => {
    const colors = ['', 'violet', 'amber'];
    return Array.from({ length: 26 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      bottom: Math.random() * 30,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 8,
    }));
  }, []);

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.color}`}
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function Terminal() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= TERM_LINES.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 400 + shown * 500);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="terminal">
      <div className="terminal-bar"><i /><i /><i /><span>developer_profile.sh</span></div>
      <div className="terminal-body">
        {TERM_LINES.map((line, i) => (
          <div key={i} className={`line ${line.cls}${i < shown ? ' show' : ''}`}>
            {line.text}
            {line.cursor && <span className="cursor" />}
          </div>
        ))}
      </div>
    </div>
  );
}

// function PixelAvatar() {
//   return (
//     <svg className="avatar-pixel" viewBox="0 0 40 44" shapeRendering="crispEdges">
//       <rect x="6" y="30" width="28" height="3" fill="#1a2129" />
//       <rect x="8" y="33" width="3" height="8" fill="#161b22" />
//       <rect x="27" y="33" width="3" height="8" fill="#161b22" />
//       <rect x="13" y="22" width="14" height="12" fill="#233042" />
//       <rect x="13" y="22" width="14" height="3" fill="#2c3c52" />
//       <rect x="11" y="24" width="2" height="8" fill="#233042" />
//       <rect x="27" y="24" width="2" height="8" fill="#233042" />
//       <rect x="18" y="22" width="4" height="2" fill="#49d9c6" />
//       <rect x="15" y="10" width="10" height="10" fill="#e7b895" />
//       <rect x="14" y="7" width="12" height="5" fill="#241a14" />
//       <rect x="14" y="10" width="2" height="7" fill="#241a14" />
//       <rect x="24" y="10" width="2" height="7" fill="#241a14" />
//       <rect x="14" y="16" width="2" height="4" fill="#241a14" />
//       <rect x="24" y="16" width="2" height="4" fill="#241a14" />
//       <rect x="13" y="9" width="2" height="8" fill="#0d0f12" />
//       <rect x="25" y="9" width="2" height="8" fill="#0d0f12" />
//       <rect x="14" y="6" width="12" height="2" fill="#0d0f12" />
//       <rect x="13" y="12" width="2" height="4" fill="#49d9c6" />
//       <rect x="25" y="12" width="2" height="4" fill="#49d9c6" />
//       <rect x="17" y="14" width="2" height="2" fill="#241a14" />
//       <rect x="21" y="14" width="2" height="2" fill="#241a14" />
//       <rect x="9" y="25" width="6" height="3" fill="#2c3c52" />
//       <rect x="25" y="25" width="6" height="3" fill="#2c3c52" />
//       <rect x="8" y="27" width="4" height="3" fill="#e7b895" />
//       <rect x="28" y="27" width="4" height="3" fill="#e7b895" />
//       <rect x="2" y="34" width="36" height="2" fill="#0c1017" />
//       <rect x="4" y="12" width="2" height="2" fill="#49d9c6" opacity="0.8" />
//       <rect x="34" y="18" width="2" height="2" fill="#9b8cff" opacity="0.7" />
//       <rect x="2" y="24" width="2" height="2" fill="#f2b544" opacity="0.6" />
//     </svg>
//   );
// }

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="desk" />
      <div className="monitor-glow" />
      <Keyboard />
      <Particles />

      <div className="wrap hero-inner">
        <div>
          <div className="hero-label">CS ENGINEERING STUDENT <span>//</span> SOFTWARE DEVELOPER <span>//</span> BUILDER</div>
          <h1 className="name">Pooja P.</h1>
          <h2 className="headline">Building ideas<br /><span className="accent">into real software.</span></h2>
          <p className="support">Computer Science Engineering student, software developer, and hackathon builder creating practical products with code, AI, and relentless curiosity.</p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">View My Projects →</a>
            <a href="#journey" className="btn btn-ghost">Explore My Journey</a>
          </div>
          <Terminal />
        </div>

        <div className="avatar-stage">
          <img
           src={pixelArt}
           alt="Pixel art representation of Pooja"
           className="avatar-pixel"
           />
          {/* <PixelAvatar /> */}
        </div>
      </div>

      <div className="scroll-cue"><span className="bar" />SCROLL</div>
    </header>
  );
}
