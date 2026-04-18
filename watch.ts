import { watch } from 'node:fs';
import { build } from './build.ts';

console.log('watching ./pug ...');
let timeout: ReturnType<typeof setTimeout>;
watch('./pug', { recursive: true }, (_event, filename) => {
	if (!filename?.toString().endsWith('.pug')) return;
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		try {
			build();
		} catch (e) {
			console.error(e);
		}
	}, 50);
});
