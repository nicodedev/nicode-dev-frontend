import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle, GetSession } from '@sveltejs/kit';
import useragent from 'useragent';
import { getDB } from '$lib/pgutil';

const uptime = new Date().getTime();

console.log(import.meta.env);

let db = null;

export const handle: Handle = async ({ request, resolve }) => {
	// create connection (does create a delay on _initial_ request)
	if (import.meta.env.VITE_SESSION_LOGGING && !db) {
		db = await getDB();
	}

	// retrieve cookie if any
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	// add db to locals if session logging is enabled
	if (import.meta.env.VITE_SESSION_LOGGING) {
		request.locals.db = db;
	}

	const response = await resolve(request);
	//status in the range 200-299
	const statusOk = response.status >= 200 && response.status < 300;

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

	// logs any request including single hits
	// to exclude, use cookie.userid
	if (request.locals.db && statusOk) {
		const _path = request.path;
		db.createRequestEntry({ uid: request.locals.userid, path: _path });
	}

	// request, response log
	console.log('>', response.status, request.method, request.path);

	return response;
};

export const getSession: GetSession = async () => {
	return {
		stats: {
			awake: new Date().getTime() - uptime
		}
	};
};
