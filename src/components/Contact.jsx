import React, { useState } from 'react';
import useReveal from '../useReveal.js';

export default function Contact() {
  const titleRef = useReveal();
  const leftRef = useReveal();
  const formRef = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in all fields before sending.');
      return;
    }

    const recipient = 'pooja.dev2216@gmail.com';
    const subject = encodeURIComponent(`Portfolio Transmission from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`
    );

    setStatus('Redirecting to your email client...');
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="eyebrow">Connection Request</div>
        <h2 className="section-title reveal" ref={titleRef}>Let&apos;s build something worth shipping.</h2>

        <div className="contact-grid">
          <div className="reveal" ref={leftRef}>
            <div className="terminal">
              <div className="terminal-bar"><i /><i /><i /><span>connection.sh</span></div>
              <div className="terminal-body">
                <div className="line show">&gt; connection_request received</div>
                <div className="line show">&gt; target: pooja.dev2216@gmail.com</div>
                {status ? (
                  <div className="line show ok">&gt; {status}</div>
                ) : (
                  <div className="line show">&gt; awaiting_message...<span className="cursor" /></div>
                )}
              </div>
            </div>
            <div className="contact-links">
              <a href="mailto:pooja.dev2216@gmail.com" className="contact-link">
                <span className="k">Email</span>
                <span className="v">pooja.dev2216@gmail.com</span>
              </a>
              <a href="https://github.com/PoojaP-22" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="k">GitHub</span>
                <span className="v">https://github.com/PoojaP-22</span>
              </a>
              <a href="https://www.linkedin.com/in/poojap22/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="k">LinkedIn</span>
                <span className="v">https://www.linkedin.com/in/poojap22/</span>
              </a>
              <a href="#contact" className="contact-link">
                <span className="k">Resume</span>
                <span className="v">Available on Request ↓</span>
              </a>
            </div>
          </div>

          <form className="reveal" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@gmail.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="What are we building?"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button className="send-btn" type="submit">Send Transmission →</button>
            {status && (
              <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
