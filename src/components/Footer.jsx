import React from 'react';

export default function Footer() {
  return <footer className="site-footer"><div className="wrap footer-inner"><a className="footer-brand" href="#home">P<span>.</span></a><p>Designed with intention. Built with curiosity.</p><div><a href="https://github.com/PoojaP-22" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/poojap22/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="mailto:pooja.dev2216@gmail.com">EMAIL ↗</a></div><small>© {new Date().getFullYear()} Pooja P. · All rights reserved.</small></div></footer>;
}
