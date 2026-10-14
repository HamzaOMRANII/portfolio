import { glyphs } from '../content.js';

/** Fixed ambient layer that sits behind the scrolling content. */
export function Background() {
  return (
    <div className="bg-field" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="noise" />
      <div className="drift-glyphs">
        {glyphs.map((g) => (
          <span key={g.t} style={{ top: g.top, left: g.left }}>
            {g.t}
          </span>
        ))}
      </div>
    </div>
  );
}
