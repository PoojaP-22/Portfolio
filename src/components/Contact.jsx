import React, { useState } from 'react';
import useReveal from '../useReveal.js';

export default function Contact() {
  const titleRef = useReveal();
  const leftRef = useReveal();
  const formRef = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your email/backend service of choice.
    console.log('Transmission queued:', form);
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
                <div className="line show">&gt; awaiting_message...<span className="cursor" /></div>
              </div>
            </div>
            <div className="contact-links">
              <a href="#" className="contact-link"><span className="k">Email</span><span className="v">pooja.dev2216@gmail.com</span></a>
              <a href="#" className="contact-link"><span className="k">GitHub</span><span className="v">https://github.com/PoojaP-22</span></a>
              <a href="#" className="contact-link"><span className="k">LinkedIn</span><span className="v">https://www.linkedin.com/in/poojap22/</span></a>
              <a href="#" className="contact-link"><span className="k">Resume</span><span className="v">Download ↓</span></a>
            </div>
          </div>

          <form className="reveal" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="you@gmail.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea placeholder="What are we building?" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button className="send-btn" type="submit">Send Transmission →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
