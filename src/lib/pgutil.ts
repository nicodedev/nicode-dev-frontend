import postgres from 'postgres';
class DB {
	sql;
	constructor() {
		const dev_url = import.meta.env.VITE_DEV_DATABASE_URL;
		const prod_url = process.env.DATABASE_URL;

		prod_url
			? console.log('using prod url')
			: dev_url
			? console.log('using dev url')
			: console.log("no db url's found in env");

		this.sql = postgres(prod_url || dev_url, {
			max: 10,
			timeout: 60,
			ssl: { rejectUnauthorized: false }
		});
	}

	createTables() {
		return Promise.all([
			this.sql`
				CREATE TABLE IF NOT EXISTS sessions (
					sessionid TEXT PRIMARY KEY,
					browser TEXT,
					os TEXT,
					epoch TIMESTAMP DEFAULT LOCALTIMESTAMP
				);
			`,
			this.sql`
				CREATE TABLE IF NOT EXISTS session_requests (
					sessionid TEXT,
					path TEXT,
					visits BIGINT DEFAULT 1,
					epoch TIMESTAMP DEFAULT LOCALTIMESTAMP,
					PRIMARY KEY(sessionid,path)
				);
			`
		]);
	}

	async createSessionEntry({ uid, browser, os }) {
		const resp = await this.sql`
      INSERT INTO sessions (sessionid,browser,os)
      VALUES (${uid},${browser},${os})
    `;

		if (!resp) {
			console.error('sessions error: ', resp);
		}
	}

	async createRequestEntry({ uid, path }) {
		const resp = await this.sql`
			INSERT INTO session_requests (sessionid,path)
			VALUES (${uid},${path})
			ON CONFLICT (sessionid,path)
			DO UPDATE SET visits = session_requests.visits + 1, epoch = DEFAULT;
		`;

		if (!resp) {
			console.error('session_requests error: ', resp);
		}
	}

	async getSessions() {
		const resp = await this.sql`
			SELECT * FROM sessions
		`;

		if (!resp) {
			console.error('getSessions error: ', resp);
		}
		return resp;
	}

	async getSessionRequests() {
		const resp = await this.sql`
			SELECT * FROM session_requests
		`;

		if (!resp) {
			console.error('getSessionRequests error: ', resp);
		}
		return resp;
	}
}

export const getDB = async () => {
	const _DB = new DB();
	await _DB.createTables();
	return _DB;
};
