import { marquee } from '../content.js';

// The list is rendered twice; the CSS animation slides it by -50% so the loop is seamless.
const items = [...marquee, ...marquee];

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.flatMap((m, i) => [<span key={`t${i}`}>{m}</span>, <span key={`d${i}`}>·</span>])}
      </div>
    </div>
  );
}
