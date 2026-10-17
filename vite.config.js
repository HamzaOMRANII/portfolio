// CommonJS on purpose: the package isn't "type": "module", so pm2 can require() the ecosystem configs.
const { defineConfig, loadEnv } = require('vite');
const react = require('@vitejs/plugin-react').default;

// Client source lives in src/client; index.html at the root is the entry.
// `npm run build` writes dist/, which src/server.js serves in production.
module.exports = defineConfig(({ mode }) => {
  // Link-preview tags in index.html need absolute URLs. Without SITE_URL they fall back to
  // site-relative paths, which browsers accept but some preview crawlers ignore.
  const siteUrl = (loadEnv(mode, process.cwd(), '').SITE_URL || '').replace(/\/+$/, '');

  return {
    plugins: [
      react(),
      { name: 'site-url', transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl) },
    ],
    publicDir: 'public',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    server: {
      host: '127.0.0.1',
      port: 5173,
    },
  };
});
