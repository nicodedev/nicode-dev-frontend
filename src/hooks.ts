import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle, GetSession } from '@sveltejs/kit';
import useragent from 'useragent';
import { getDB } from '$lib/pgutil';
const sessionLogging = import.meta.env.VITE_sessionLogging;

const uptime = new Date().getTime();

let db = null;

export const handle: Handle = async ({ request, resolve }) => {
	// create connection
	if (!db) {
		db = await getDB();
	}

	// retrieve cookie if any
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	// add db to locals if session logging is enabled
	if (sessionLogging) {
		request.locals.db = db;
	}

	const response = await resolve(request);

	// "first time" visit
	if (!cookies.userid && request.headers['user-agent']) {
		if (request.locals.db) {
			const agent = useragent.lookup(request.headers['user-agent']);

			db.createSessionEntry({
				uid: request.locals.userid,
				browser: agent.toAgent(),
				os: agent.os.toString()
			});
		}

		// set cookie
		response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
			path: '/',
			httpOnly: true
		});
	}

	// has session
	if (request.locals.db && cookies.userid) {
		const _q = request.query.toString();
		const _path = request.path;
		db.requestEntry({ uid: cookies.userid, path: _path + (_q.length ? '?' + _q : '') });
	}

	// request, response log
	console.log(response.status, request.method, request.path);

	// 4xx and 5xx errors
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
