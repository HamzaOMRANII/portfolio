/**
 * Zero-dependency static server for the Vite build (./dist).
 *
 * Runs under pm2, listens on localhost only, and is meant to sit behind nginx.
 * - Serves files from dist/, falls back to index.html for extension-less routes (SPA)
 * - Long-lived immutable caching for hashed assets, no-cache for index.html
 * - /healthz for pm2 / uptime checks
 *
 * Env: PORT (default 3010), HOST (default 127.0.0.1) — from the environment or .env
 */
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

try {
  process.loadEnvFile(path.resolve(__dirname, '..', '.env'));
} catch {
  // no .env — rely on the real environment (pm2 sets it in production)
}

const PORT = Number(process.env.PORT) || 3010;
const HOST = process.env.HOST || '127.0.0.1';
const ROOT = path.resolve(__dirname, '..', 'dist');
const INDEX = path.join(ROOT, 'index.html');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

if (!fs.existsSync(INDEX)) {
  console.error(`[portfolio] ${INDEX} not found. Run "npm run build" first.`);
  process.exit(1);
}

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  res.end(body);
}

function serveFile(req, res, file, status = 200) {
  const ext = path.extname(file).toLowerCase();
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const hashed = rel.startsWith('assets/');
  const headers = {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Cache-Control': hashed ? 'public, max-age=31536000, immutable' : 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  };

  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, { 'Content-Type': 'text/plain' }, 'Not found');
    headers['Content-Length'] = st.size;
    res.writeHead(status, headers);
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).on('error', () => res.destroy()).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, { Allow: 'GET, HEAD', 'Content-Type': 'text/plain' }, 'Method not allowed');
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return send(res, 400, { 'Content-Type': 'text/plain' }, 'Bad request');
  }

  if (pathname === '/healthz') {
    return send(res, 200, { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' }, 'ok');
  }

  const target = path.normalize(path.join(ROOT, pathname));
  if (target !== ROOT && !target.startsWith(ROOT + path.sep)) {
    return send(res, 403, { 'Content-Type': 'text/plain' }, 'Forbidden');
  }

  if (pathname.endsWith('/') || !path.extname(pathname)) {
    // Real directory index or SPA route -> index.html
    const dirIndex = path.join(target, 'index.html');
    return serveFile(req, res, fs.existsSync(dirIndex) ? dirIndex : INDEX);
  }
  serveFile(req, res, target);
});

server.listen(PORT, HOST, () => {
  console.log(`[portfolio] serving ${ROOT} on http://${HOST}:${PORT}`);
});

function shutdown() {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 5000).unref();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
