import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle, GetSession } from '@sveltejs/kit';

let uniqueId = 0;
const uptime = new Date().getTime();

export const handle: Handle = async ({ request, resolve }) => {
	// TODO https://github.com/sveltejs/kit/issues/1046
	// if (request.query.has('_method')) {
	// 	request.method = request.query.get('_method').toUpperCase();
	// }

	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	const response = await resolve(request);

	if (!cookies.userid && request.headers['host']) {
		response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
			path: '/',
			httpOnly: true
		});
		uniqueId++;
	}

	console.log(request.method, response.status, request.path);

	return response;
};

export const getSession: GetSession = async (request) => {
	return request.locals.userid
		? {
				userid: request.locals.userid,
				stats: {
					sessions: uniqueId,
					uptime: new Date().getTime() - uptime
				}
		  }
		: {};
};
