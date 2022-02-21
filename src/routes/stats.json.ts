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

	const _sessions = sessions.reduce(
		(acc, session) => {
			const { browser, os } = session;
			if (!acc.browser[browser]) acc.browser[browser] = 0;
			if (!acc.os[os]) acc.os[os] = 0;

			acc.browser[browser]++;
			acc.os[os]++;

			return acc;
		},
		{ os: {}, browser: {}, sessions: sessions.length }
	);

	const _sessionRequests = sessionRequests.reduce((acc, sessionRequest) => {
		const { path: p, visits: hits, epoch } = sessionRequest;
		const _path = p.toLowerCase();
		const _time = new Date(epoch).toLocaleDateString('en');

		if (!acc) acc = {};
		if (!acc[_time]) acc[_time] = {};

		if (!_path.endsWith('.json')) return acc;
		const cleanpath = _path.replace('.json', '').substring(1);

		if (!acc[_time][cleanpath]) {
			acc[_time][cleanpath] = { hits, unique: 1 };
		} else {
			acc[_time][cleanpath].hits += hits;
			acc[_time][cleanpath].unique++;
		}

		return acc;
	}, {});

	called.epoch = Date.now();
	called.last = {
		body: {
			data: {
				..._sessions,
				requests: _sessionRequests
			}
		}
	};

	return called.last;
}
