/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_DEV_DATABASE_URL: string;
	readonly VITE_SESSION_LOGGING: boolean;
	readonly VITE_weather: boolean;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
