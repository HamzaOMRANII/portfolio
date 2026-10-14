#!/usr/bin/env bash
# Build the Vite client and (re)start it under pm2.
# Run from the project root on the server:   bash deploy/deploy.sh
# nginx is configured by hand in /etc/nginx/nginx.conf (see deploy/nginx.portfolio.conf);
# this script only tests and reloads it (needs sudo).
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Pulling latest"
git pull --ff-only

echo "==> Installing dependencies"
npm ci

echo "==> Building client"
npm run build

echo "==> Starting / reloading pm2 process"
if pm2 describe portfolio >/dev/null 2>&1; then
  pm2 reload ecosystem.prod.config.js --update-env
else
  pm2 start ecosystem.prod.config.js
fi
pm2 save

echo "==> Testing + reloading nginx"
sudo nginx -t
sudo systemctl reload nginx

echo "==> Health check"
sleep 1
curl -fsS "http://127.0.0.1:${PORT:-3010}/healthz" && echo
echo "Done."
