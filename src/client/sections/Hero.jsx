import { stats } from '../content.js';
import { Terminal } from '../components/Terminal.jsx';
import { Barcode } from '../components/Barcode.jsx';
import portrait from '../assets/hamza-portrait.webp';

function Collage() {
  return (
    <div className="collage">
      <div className="code-panel" aria-hidden="true">
        <div className="code-panel-head">
          <span />
          <span />
          <span />
        </div>
        <Terminal />
      </div>

      <span className="float-chip float-chip--dev">&lt;/&gt; DEV</span>
      <span className="float-chip float-chip--sec">◆ SEC</span>

      <div className="badge-card">
        <div className="badge-scan-frame">
          <span className="bracket bracket-tl" />
          <span className="bracket bracket-tr" />
          <span className="bracket bracket-bl" />
          <span className="bracket bracket-br" />
          <div className="scanline" />
          <img src={portrait} alt="Portrait of Hamza Omrani" className="badge-photo" width="1100" height="1589" />
        </div>
        <div className="badge-info">
          <div className="badge-row">
            <span className="badge-name">OMRANI, HAMZA</span>
            <span className="badge-status">
              <span className="status-dot" />
              VERIFIED
            </span>
          </div>
          <div className="badge-sub">SOLUTIONS ENGINEER — DEV · AI/BI · SEC</div>
          <Barcode />
        </div>
      </div>
    </div>
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
            Seven years designing and shipping IT solutions — full‑stack platforms, embedded systems, applied AI, and BI
            pipelines. Security isn't a separate service bolted on at the end; it's part of how the thing gets built in
            the first place.
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
          <Collage />
        </div>
      </div>
    </section>
  );
}
