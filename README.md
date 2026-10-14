# Hamza Omrani — Portfolio

Personal portfolio site built with **Vite + React** (plain JavaScript / JSX). In production a small Node server (`src/server.js`) serves the built site, usually under **pm2** behind **nginx**.

---

## 1. Prerequisites

| Tool | Version | Needed for |
|------|---------|------------|
| [Node.js](https://nodejs.org/) | **20.19+** or **22.12+** (npm comes with it) | everything |
| [Git](https://git-scm.com/) | any recent | cloning the repo |
| [pm2](https://pm2.keymetrics.io/) | latest | optional: keeping the server running |
| [nginx](https://nginx.org/) | any recent | optional: production reverse proxy |

### Windows

```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
npm install -g pm2          # optional
```

### macOS

```bash
brew install node git
npm install -g pm2          # optional
```

### Linux (Ubuntu / Debian)

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs git
sudo npm install -g pm2     # optional
sudo apt install -y nginx   # optional, production only
```

Check your versions:

```bash
node -v    # v20.19+ or v22.12+
npm -v
```

---

## 2. Install

```bash
git clone <your-repo-url> portfolio
cd portfolio
npm install
```

Create your local environment file:

```bash
cp .env.example .env        # Windows PowerShell: Copy-Item .env.example .env
```

`.env` sets where the production server listens:

```
HOST=127.0.0.1
PORT=3010
```

---

## 3. Run in development

```bash
npm run dev
```

Open **http://127.0.0.1:5173**. Edits under `src/client/` reload instantly.

---

## 4. Build

```bash
npm run build
```

This writes the optimized site to `dist/`.

---

## 5. Run the production build

```bash
npm start
```

Open **http://127.0.0.1:3010** (or whatever `HOST`/`PORT` you set in `.env`). Health check: `http://127.0.0.1:3010/healthz` returns `ok`.

### With pm2 (keeps it running, restarts on crash)

```bash
npm run build
npm run pm2:start           # start + save the process list
npm run pm2:reload          # after a new build
pm2 logs portfolio          # view logs
```

For the server deployment (nginx on `37.60.240.195:3010` → app on `127.0.0.1:3010`), see [DEPLOY.md](DEPLOY.md).

---

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Vite dev server with hot reload (port 5173) |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Vite's own preview of `dist/` |
| `npm start` | Serve `dist/` with `src/server.js` (port 3010) |
| `npm run pm2:dev` | Run the dev server under pm2 (`ecosystem.config.js`) |
| `npm run pm2:start` | Run the production server under pm2 (`ecosystem.prod.config.js`) |
| `npm run pm2:reload` | Reload the production pm2 process |

---

## Project structure

```
deploy/                    deploy.sh + nginx site config
public/                    static files copied as-is (favicon)
src/
  server.js                static server for dist/
  client/
    main.jsx, App.jsx      app entry
    styles.css             all styling
    config.js              name, emails, LinkedIn, LLC name
    content.js             all page text
    components/            shared UI pieces
    sections/              one file per page section
    assets/                images
index.html                 Vite entry page
vite.config.js             build config
ecosystem.config.js        pm2 — development
ecosystem.prod.config.js   pm2 — production
.env.example               HOST / PORT template
```

To change the site's text, edit `src/client/content.js` and `src/client/config.js`.

---

## Troubleshooting

- **`dist/index.html not found`** when running `npm start`: run `npm run build` first.
- **Port already in use**: change `PORT` in `.env` (and in `ecosystem.prod.config.js` if you use pm2).
- **`ExperimentalWarning: ... require() ... ES Module`** during build on Node 22.12: harmless. Newer Node 22 releases don't show it.
