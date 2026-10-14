This is a Vite + React (plain JavaScript / JSX, no TypeScript) portfolio site, served in production by a zero-dependency Node server under pm2 behind nginx. See DEPLOY.md.

## Structure

- `src/client/` — React app. Components use `.jsx`, data/helpers use `.js`. Page text lives in `content.js` and `config.js`.
- `src/client/styles.css` — all styling (plain CSS with custom properties); components only set class names.
- `src/server.js` — CommonJS static server for `dist/`. Keep it dependency-free.
- `index.html` + `vite.config.js` at the root; `public/` is copied verbatim into `dist/`.
- `ecosystem.config.js` (dev) / `ecosystem.prod.config.js` (prod) — pm2 configs.

The package is intentionally **not** `"type": "module"`: pm2 loads the ecosystem files with `require()`, so root `.js` configs stay CommonJS.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build into dist/
npm start        # serve dist/ with src/server.js
```

Run `npm run build` before declaring a task done.
