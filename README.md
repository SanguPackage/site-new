Sangu.be website
================

Pug templates compiled to static HTML by a small [Bun](https://bun.com) + TypeScript script.

Building
--------

```bash
bun install
bun run build   # one-shot compile
bun run watch   # rebuild on .pug change
```

Output lands in `./site/`.

Serving locally
---------------

```bash
bun run serve
```

Opens `http://127.0.0.1:8080/`.

Configuration
-------------

Template locals live in `./site/api/sp-config.json`.
Access them in Pug as `#{contributors}`, etc.

Deploying
---------

See `DEPLOY.md`.
