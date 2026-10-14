import { credentials, languages } from '../content.js';
import { SectionHead } from '../components/SectionHead.jsx';

export function Credentials() {
  return (
    <section className="credentials" id="credentials">
      <SectionHead eyebrow="On record" title="Credentials" />
      <div className="cred-grid">
        {credentials.map((c) => (
          <div key={c.t} className="cred-chip">
            <span className="cred-issuer">{c.by}</span>
            {c.t}
          </div>
        ))}
      </div>
      <div className="lang-row">
        {languages.map((l) => (
          <span key={l.l}>
            <strong>{l.l}</strong> {l.v}
          </span>
        ))}
      </div>
    </section>
  );
}
