import { useEffect, useState } from 'react';
import { terminalLines } from '../content.js';

/** Lines "type in" one by one, hold for a moment, then the loop restarts. */
export function Terminal() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const total = terminalLines.length;
    const t = setInterval(() => setShown((s) => (s >= total + 3 ? 0 : s + 1)), 800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="code-lines">
      {terminalLines.map((l, i) => (
        <div key={i} className="code-line" style={i >= shown ? { visibility: 'hidden' } : undefined}>
          <span className="c-muted">{l.p}</span>{' '}
          {l.hl && <span className="c-bright">{l.hl}</span>}
          {l.rest}
          {l.ok && <span className="c-gold">{l.ok}</span>}
          {i === shown - 1 && <span className="c-blink">_</span>}
        </div>
      ))}
    </div>
  );
}
