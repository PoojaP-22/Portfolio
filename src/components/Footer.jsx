import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <span className="footer-text">BUILT WITH CODE, CURIOSITY &amp; TOO MANY DEBUGGING SESSIONS.</span>
          <span className="footer-text">© 2026 Pooja P.</span>
        </div>
        <div className="walker-track">
          <svg className="walker" viewBox="0 0 8 10" shapeRendering="crispEdges">
            <rect x="2" y="0" width="4" height="4" fill="#e7b895" />
            <rect x="1" y="0" width="6" height="2" fill="#241a14" />
            <rect x="2" y="4" width="4" height="4" fill="#49d9c6" />
            <rect x="1" y="8" width="2" height="2" fill="#161b22" />
            <rect x="5" y="8" width="2" height="2" fill="#161b22" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
