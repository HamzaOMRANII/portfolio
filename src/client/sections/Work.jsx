import { work } from '../content.js';
import { SectionHead } from '../components/SectionHead.jsx';

export function Work() {
  return (
    <section className="work" id="work">
      <SectionHead eyebrow="Selected work" title="What that's looked like on the ground" />
      <div className="work-timeline">
        {work.map((w) => (
          <article key={w.n} className={`work-item work-item--${w.kind}`}>
            <div className="work-node">
              <span>{w.n}</span>
            </div>
            <div className="work-body">
              <p className="work-domain">{w.domain}</p>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
              <div className="tag-row">
                {w.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
