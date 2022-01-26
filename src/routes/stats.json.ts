const sessionLogging = import.meta.env.VITE_sessionLogging;

export async function get(requestEvent) {
	if (!sessionLogging) return;

	const db = requestEvent.locals.db;
	const sessions = await db.getSessions();

	const today = new Date();
	const sessionsToday = sessions.filter((session) => {
		const { epoch } = session;
		return new Date(epoch).getDate() === today.getDate();
	});

	const data = sessions.reduce(
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

	return { body: { data } };
}