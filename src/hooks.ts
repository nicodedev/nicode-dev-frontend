import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle, GetSession } from '@sveltejs/kit';
import useragent from 'useragent';
import { DB } from '$lib/pgutil';

const uptime = new Date().getTime();

const db = new DB();
db.createTables();

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	request.locals.db = db;

	const response = await resolve(request);

	// has session
	if (cookies.userid && db.up) {
		const _q = request.query.toString();
		const _path = request.path;
		db.requestEntry({ uid: cookies.userid, path: _path + (_q.length ? '?' + _q : '') });
	}

	// set cookie / new session
	if (!cookies.userid && request.headers['user-agent']) {
		const agent = useragent.lookup(request.headers['user-agent']);

		db.createSessionEntry({
			uid: request.locals.userid,
			browser: agent.toAgent(),
			os: agent.os.toString()
		});

		response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
			path: '/',
			httpOnly: true
		});
	}

	console.log(response.status, request.method, request.path);

	if (['5', '4'].includes(response.status[0])) {
		console.error(response.status[0]);
		console.log('req-->', request);
		console.log('res-->', response);
	}

	return response;
};

export const getSession: GetSession = async () => {
	return {
		stats: {
			awake: new Date().getTime() - uptime
		}
	};
};
