const called = {
	epoch: null,
	last: null
};

export async function get(requestEvent) {
	if (!import.meta.env.VITE_stats) {
		console.log('Stats disabled');
		return;
	}
	if (!import.meta.env.VITE_SESSION_LOGGING) {
		console.log('session logging is disabled');
		return;
	}
	const db = requestEvent.locals.db;
	if (!db) {
		console.log('session logging is called without db');
		return;
	}

	// return called if not older than 1 minutes
	if (called.epoch && called.epoch > Date.now() - 60 * 1000) {
		console.log('session logging is called less than 1 minute ago');
		return called.last;
	}

	const sessions = await db.getSessions();
	const sessionRequests = await db.getSessionRequests();

	const now = new Date();
	const sessionsToday = sessions.filter((session) => {
		const { epoch } = session;
		return new Date(epoch).getDate() === now.getDate();
	});

	const _sessions = sessions.reduce(
		(acc, session) => {
			const { browser, os } = session;
			if (!acc.browser[browser]) acc.browser[browser] = 0;
			if (!acc.os[os]) acc.os[os] = 0;

			acc.browser[browser]++;
			acc.os[os]++;

			return acc;
		},
		{ os: {}, browser: {}, sessions: sessions.length, today: sessionsToday.length }
	);

	const _sessionRequests = sessionRequests.reduce((acc, sessionRequest) => {
		const { path, visits } = sessionRequest;
		if (!acc[path]) {
			acc[path] = { visits, uniqe: 1 };
		} else {
			acc[path].visits += visits;
			acc[path].uniqe++;
		}
		return acc;
	}, {});

	called.epoch = Date.now();
	called.last = { body: { ..._sessions, okReq: Object.entries(_sessionRequests) } };

	return called.last;
}
