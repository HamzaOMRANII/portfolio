import { useEffect, useState } from 'react';
import { navItems } from '../content.js';

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Back to top" onClick={close}>
        <span className="brand-mark">
          H<span className="dot">•</span>O
        </span>
      </a>

      <nav className={`site-nav${open ? ' open' : ''}`} id="siteNav">
        {navItems.map((it) => (
          <a key={it.id} href={`#${it.id}`} onClick={close}>
            <span>{it.n}</span>
            {it.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn btn-primary btn-sm header-cta">
        Let's talk
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-controls="siteNav"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
