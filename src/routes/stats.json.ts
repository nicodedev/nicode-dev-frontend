export async function get(requestEvent) {
	if (import.meta.env.VITE_SESSION_LOGGING !== 'true') {
		console.log('session logging is disabled');
		return;
	}

	const db = requestEvent.locals.db;
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
		const { path } = sessionRequest;
		if (!acc[path]) acc[path] = 0;
		acc[path]++;
		return acc;
	}, {});

	return { body: { ..._sessions, okReq: Object.entries(_sessionRequests) } };
}
