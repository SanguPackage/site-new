import Client from 'ssh2-sftp-client';
import { build } from './build.ts';

const { FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_DIR } = process.env;
if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD || !FTP_REMOTE_DIR) {
	console.error('Missing env. Copy .env.example to .env and fill in FTP_PASSWORD.');
	process.exit(1);
}

build();

const sftp = new Client();
sftp.on('upload', (info: { source: string }) => console.log('→', info.source));

try {
	await sftp.connect({ host: FTP_HOST, username: FTP_USER, password: FTP_PASSWORD });
	await sftp.uploadDir('./site', FTP_REMOTE_DIR);
	console.log('deploy done');
} catch (e) {
	console.error(e);
	process.exit(1);
} finally {
	try {
		await sftp.end();
	} catch {}
}
