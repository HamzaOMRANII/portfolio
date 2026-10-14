import { site } from '../config.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="brand-mark small">
        H<span className="dot">•</span>O
      </span>
      <p>{site.name} — Solutions Development &amp; Security Consulting</p>
      <p className="footer-note">
        Operating through {site.llcName} · {site.secondaryEmail}
      </p>
    </footer>
  );
}
