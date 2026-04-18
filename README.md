Sangu.be website
================

Pug templates compiled to static HTML by a small [Bun](https://bun.com) + TypeScript script.

Building
--------

```bash
bun install
bun run build   # one-shot compile → ./site/
```

Development
-----------

```bash
bun run dev
```

Serves `./site/` on `http://localhost:8080/`, rebuilds and live-reloads on changes.

Configuration
-------------

Template locals live in `./site/api/sp-config.json`.
Access them in Pug as `#{contributors}`, etc.

Deploying
---------

```bash
cp .env.example .env   # fill in FTP_PASSWORD
bun run deploy         # builds + SFTP uploads ./site/
```

See `DEPLOY.md` for the broader release steps.
