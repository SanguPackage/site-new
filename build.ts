import pug from 'pug';
import { readdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import locals from './site/api/sp-config.json';

const srcDir = './pug/pages';
const outDir = './site';

export function build(): void {
	for (const file of readdirSync(srcDir).filter(f => f.endsWith('.pug'))) {
		const html = pug.renderFile(join(srcDir, file), { ...locals, pretty: true, cache: false });
		const out = join(outDir, basename(file, '.pug') + '.html');
		writeFileSync(out, html);
		console.log(out);
	}
}

build();
