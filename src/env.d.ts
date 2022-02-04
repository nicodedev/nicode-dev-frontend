/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DEV_DATABASE_URL?: string;
	readonly VITE_SESSION_LOGGING?: boolean;
	readonly VITE_weather?: boolean;
	readonly VITE_stats?: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
