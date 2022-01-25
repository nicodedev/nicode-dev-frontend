import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle, GetSession } from '@sveltejs/kit';
import useragent from 'useragent';
import { DB } from '$lib/pgutil';

const uptime = new Date().getTime();

let db = null;

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	if (!db) db = new DB();
	request.locals.db = db;

	const response = await resolve(request);

	// has session

	if (cookies.userid && request.headers['user-agent']) {
		db.requestEntry({ uid: cookies.userid, path: request.path });
	}

	// set cookie / new session
	if (!cookies.userid && request.headers['user-agent']) {
		const agent = useragent.lookup(request.headers['user-agent']);

		db.createSessionEntry(request.locals.userid, agent.toAgent(), agent.os.toString());

		response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
			path: '/',
			httpOnly: true
		});
	}

	console.log(response.status, request.method, request.path);

	return response;
};

export const getSession: GetSession = async (request) => {
	return {
		stats: {
			awake: new Date().getTime() - uptime
		}
	};
};
