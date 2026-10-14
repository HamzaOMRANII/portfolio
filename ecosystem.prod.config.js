// pm2 — production: serves the built dist/ behind nginx.
// Start with:  npm run build && npm run pm2:start
module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'src/server.js',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1', // nginx is the only thing that should reach it
        PORT: 3010, // change if another app already uses it (and the nginx upstream)
      },
    },
  ],
};
