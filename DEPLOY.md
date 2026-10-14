# Hamza Omrani — portfolio (Vite + React, served by Node behind pm2 + nginx)

## Layout
    index.html                 Vite entry
    vite.config.js             build config (dist/)
    public/                    copied as-is into dist/ (favicon)
    src/client/                React app (.jsx) — content.js / config.js hold the text
    src/server.js              zero-dependency static server for dist/
    ecosystem.config.js        pm2 — dev (Vite dev server)
    ecosystem.prod.config.js   pm2 — production (src/server.js)
    deploy/                    deploy.sh + nginx site
    .env.example               HOST / PORT for src/server.js (copy to .env)

## Local
    npm install
    npm run dev            # http://127.0.0.1:5173 with hot reload
    npm run build          # creates dist/
    npm start              # serves dist/ on http://127.0.0.1:3010

## Production on the VPS (Node 20.19+ or 22.12+, pm2, nginx)
    sudo apt install -y nginx && sudo npm i -g pm2
    git clone <your repo> portfolio && cd portfolio
    npm ci && npm run build
    npm run pm2:start
    pm2 startup                                        # run the command it prints, once
Then nginx: paste the server block from `deploy/nginx.portfolio.conf` into the `http { }` block of
`/etc/nginx/nginx.conf` (replacing the existing "Portfolio" block), and run
`sudo nginx -t && sudo systemctl reload nginx`.
The site is then live at http://37.60.240.195:3010.

Later updates: `bash deploy/deploy.sh` (needs a git checkout; otherwise run npm ci, npm run build, npm run pm2:reload).

## Ports
- nginx listens on the public IP `37.60.240.195:3010`; the Node app listens on `127.0.0.1:3010`.
  Same port, different addresses, so they don't clash.
- Keep `HOST=127.0.0.1` in `.env` and `ecosystem.prod.config.js`. `HOST=0.0.0.0` would try to take
  the public IP's port 3010 too and fail with `EADDRINUSE`.
- To move the app to another port, change `PORT` in both of those files and the `upstream` in the nginx block.
- The password manager uses 11000 on the same server; don't reuse it.

## Domain switch
Add a `server { listen 80; server_name yourdomain.com www.yourdomain.com; ... }` block with the same
`location` blocks, then `sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com`.

## Before going live
- src/client/config.js: replace `llcName` ('[your LLC name]') — shown in the footer.
- Check the contact emails in src/client/config.js.
