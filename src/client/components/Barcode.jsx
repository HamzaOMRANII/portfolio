import { useMemo } from 'react';

const WIDTH = 220;

/** Deterministic bars, so it doesn't reshuffle on render. */
export function Barcode() {
  const bars = useMemo(() => {
    let seed = 42;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const out = [];
    let x = 0;
    while (x < WIDTH) {
      const w = 1 + Math.floor(rand() * 3);
      if (rand() > 0.55) out.push({ x, w });
      x += w + 2;
    }
    return out;
  }, []);

  return (
    <div className="badge-barcode" aria-hidden="true">
      <svg viewBox={`0 0 ${WIDTH} 28`} preserveAspectRatio="none">
        {bars.map((b) => (
          <rect key={b.x} x={b.x} y="0" width={b.w} height="28" />
        ))}
      </svg>
    </div>
  );
}
