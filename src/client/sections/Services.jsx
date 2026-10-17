import { useState } from 'react';
import { services } from '../content.js';
import { SectionHead } from '../components/SectionHead.jsx';

function Row({ s, open, onToggle }) {
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <article
      className={`service-row${open ? ' open' : ''}`}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={onKeyDown}
    >
      <div className="service-row-top">
        <span className="service-index">{s.n}</span>
        <h3>{s.title}</h3>
        <span className="service-arrow" aria-hidden="true">
          ＋
        </span>
      </div>
      <div className="service-row-body">
        <div>
          <p>{s.lead}</p>
          <ul>
            {s.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section className="services" id="services">
      <SectionHead eyebrow="Where I help" title="I build it secure from day one." />
      <div className="service-rows">
        {services.map((s, i) => (
          <Row key={s.n} s={s} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}
