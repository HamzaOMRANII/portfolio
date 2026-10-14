// pm2 — development: Vite dev server with hot reload.  Start with:  npm run pm2:dev
module.exports = {
  apps: [
    {
      name: 'portfolio-dev',
      script: 'node_modules/vite/bin/vite.js',
      cwd: __dirname,
      env: { NODE_ENV: 'development' },
    },
  ],
};
