import { site } from '../config.js';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow">Get in touch</p>
      <h2>
        Have something worth
        <br />
        building <span className="text-accent">properly?</span>
      </h2>
      <p className="contact-lead">
        Tell me what you're trying to build, or what's broken. I'll tell you honestly whether it's a development job, a
        systems job, a security job — or, usually, some mix of the three.
      </p>
      <div className="contact-actions">
        <a href={`mailto:${site.email}`} className="btn btn-primary btn-lg">
          {site.email}
        </a>
        <a href={site.linkedin} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
