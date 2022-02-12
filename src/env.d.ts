/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DEV_DATABASE_URL?: string;
	readonly VITE_SESSION_LOGGING?: boolean;
	readonly VITE_routes?: boolean;
	readonly VITE_stats?: boolean;
	readonly VITE_blog?: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
