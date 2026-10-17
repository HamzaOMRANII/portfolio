import { stats, brainCaption } from '../content.js';
import brain from '../assets/brain.gif';

function Showroom() {
  return (
    <figure className="showroom">
      <span className="float-chip float-chip--dev">&lt;/&gt; DEV</span>
      <span className="float-chip float-chip--sec">◆ SEC</span>
      <div className="brain-stage">
        <img src={brain} alt="Rotating 3D brain with glowing neural signals" className="brain-img" width="640" height="360" />
      </div>
      <figcaption className="showroom-caption">
        <strong>{brainCaption.title}</strong>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="pill">
            <span className="pulse-dot" />
            Available for development &amp; security engagements
          </p>

          <h1>
            Solutions, built.
            <br />
            Software. Embedded. AI/BI.
            <br />
            <span className="text-accent">Secured by design.</span>
          </h1>

          <p className="hero-lead">
            I'm human, with a real mind and a real heart. I don't take on work that could harm people — for that, go ask
            the devils of this world. I build technology that serves: bridges, shields, electricity, transport,
            aviation, and much more.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View selected work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a conversation
            </a>
          </div>

          <dl className="hero-stats">
            {stats.map((s) => (
              <div key={s.l}>
                <dt>{s.v}</dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-badge-wrap">
          <Showroom />
        </div>
      </div>
    </section>
  );
}
