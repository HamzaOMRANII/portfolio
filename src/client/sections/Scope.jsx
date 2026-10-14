import { scope } from '../content.js';
import { SectionHead } from '../components/SectionHead.jsx';

export function Scope() {
  return (
    <section className="scope" id="scope">
      <SectionHead eyebrow="Also on request" title="Sectors & specialized engagements" />
      <div className="scope-grid">
        {scope.map((c) => (
          <article key={c.title} className={`scope-card${c.confidential ? ' scope-card--confidential' : ''}`}>
            {c.confidential ? (
              <span className="scope-tag scope-tag--nda">
                <span className="tag-dot" />
                {c.tag}
              </span>
            ) : (
              <span className="scope-tag">{c.tag}</span>
            )}
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}

        <article className="scope-card scope-card--note">
          <p className="scope-note">
            Sensitive by nature — these engagements are scoped individually. Get in touch and we'll work out what can be
            discussed openly and what needs an NDA first.
          </p>
          <a href="#contact" className="btn btn-ghost btn-sm">
            Start a conversation
          </a>
        </article>
      </div>
    </section>
  );
}
