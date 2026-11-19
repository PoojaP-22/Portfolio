import React, { useState } from 'react';
import useReveal from '../useReveal.js';

export default function Contact() {
  const titleRef = useReveal();
  const leftRef = useReveal();
  const formRef = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const recipient = 'pooja.dev2216@gmail.com';
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`);
    setStatus('Opening your email application…');
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="wrap">
        <div className="section-kicker">06 / SAY HELLO</div>
        <h2 className="section-title reveal" ref={titleRef}>Have a good problem?<br /><em>Let’s work on it.</em></h2>
        <div className="contact-grid">
          <div className="contact-intro reveal" ref={leftRef}><p>I’m interested in software engineering internships and opportunities to contribute to thoughtful, user-focused products. I’d love to hear about your team, project, or open role.</p><div className="contact-links"><a href="mailto:pooja.dev2216@gmail.com"><span>Email</span><strong>pooja.dev2216@gmail.com ↗</strong></a><a href="https://github.com/PoojaP-22" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/PoojaP-22 ↗</strong></a><a href="https://www.linkedin.com/in/poojap22/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect professionally ↗</strong></a><div className="resume-reminder"><span>RESUME</span><strong>Add your current PDF before publishing</strong></div></div></div>
          <form className="contact-form reveal" ref={formRef} onSubmit={handleSubmit}><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I address you?" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Message<textarea required rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the opportunity…" /></label><button className="button button-primary" type="submit">Send an email <span>↗</span></button>{status && <p className="form-status">{status}</p>}</form>
        </div>
      </div>
    </section>
  );
}
