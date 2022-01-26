import postgres from 'postgres';

const { VITE_Host, VITE_Database, VITE_User, VITE_Port, VITE_Password, MODE } = import.meta.env;
const DEV_OPTIONS = {
	host: VITE_Host,
	database: VITE_Database,
	username: VITE_User,
	password: VITE_Password,
	port: VITE_Port,
	max: 10,
	timeout: 60,
	ssl: { rejectUnauthorized: false }
};

export class DB {
	sql;
	up = false;
	constructor() {
		const dev = MODE === 'development';
		this.sql = dev ? postgres(DEV_OPTIONS) : postgres(process.env.DATABASE_URL);
	}

	async createTables() {
		await this.sql`
			CREATE TABLE IF NOT EXISTS sessions (
				sessionid TEXT PRIMARY KEY,
				browser TEXT,
				os TEXT,
				epoch TIMESTAMP DEFAULT LOCALTIMESTAMP
			);
    `;
		await this.sql`
			CREATE TABLE IF NOT EXISTS session_requests (
				sessionid TEXT,
				path TEXT,
				visits BIGINT DEFAULT 1,
				epoch TIMESTAMP DEFAULT LOCALTIMESTAMP,
				PRIMARY KEY(sessionid,path)
			);
		`;
		this.up = true;
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

	async requestEntry({ uid, path }) {
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
