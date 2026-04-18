import { watch } from 'node:fs';
import { build } from './build.ts';

const RELOAD_SCRIPT = `<script>new WebSocket('ws://'+location.host+'/__livereload').onmessage=()=>location.reload()</script>`;

build();

const server = Bun.serve({
	port: 8080,
	async fetch(req, server) {
		const url = new URL(req.url);

		if (url.pathname === '/__livereload') {
			return server.upgrade(req) ? undefined : new Response('Upgrade failed', { status: 500 });
		}

		const pathname = url.pathname;
		const hasExt = /\.[a-z0-9]+$/i.test(pathname);
		const redirectToDir = pathname + '/';
		const candidates: { path: string; redirect?: string }[] = pathname.endsWith('/')
			? [{ path: pathname + 'index.html' }, { path: pathname + 'index.php' }]
			: hasExt
				? [{ path: pathname }]
				: [
					{ path: pathname },
					{ path: pathname + '.html' },
					{ path: pathname + '/index.html', redirect: redirectToDir },
					{ path: pathname + '/index.php', redirect: redirectToDir },
				];

		for (const { path, redirect } of candidates) {
			const file = Bun.file(`./site${path}`);
			if (!(await file.exists())) continue;
			if (redirect) return Response.redirect(redirect, 302);
			if (/\.(html|php)$/i.test(path)) {
				const html = (await file.text()).replace('</body>', `${RELOAD_SCRIPT}</body>`);
				return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
			}
			return new Response(file);
		}
		return new Response('Not Found', { status: 404 });
	},
	websocket: {
		open(ws) {
			ws.subscribe('reload');
		},
		message() {},
	},
});

console.log(`dev server: http://localhost:${server.port}`);

let t: ReturnType<typeof setTimeout>;
watch('./pug', { recursive: true }, (_event, filename) => {
	if (!filename?.toString().endsWith('.pug')) return;
	clearTimeout(t);
	t = setTimeout(() => {
		try {
			build();
			server.publish('reload', 'reload');
		} catch (e) {
			console.error(e);
		}
	}, 50);
});
