import { process } from '../content.js';
import { SectionHead } from '../components/SectionHead.jsx';

export function Process() {
  return (
    <section className="process" id="process">
      <SectionHead eyebrow="How it runs" title="Five stages. No skipped diagnosis." />
      <div>
        <ol className="timeline">
          {process.map((p) => (
            <li key={p.n}>
              <div className="tl-node">
                <span>{p.n}</span>
              </div>
              <div className="tl-content">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
