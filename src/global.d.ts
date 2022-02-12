/// <reference types="@sveltejs/kit" />

type ConsultantType = {
	visible: boolean;
	name: string;
	headshot: string;
	contact: ContactType;
	preamble: string;
	availability: string;
	focus: string;
	projects: ProjectType[];
};

type ContactType = {
	email?: string;
	mobile?: string;
	linkedin?: string;
	github?: string;
};

type ProjectType = {
	title: string;
	description: string;
	period: PeriodType;
	tags: string[];
};

type PeriodType = {
	from: string;
	to?: string;
};

type BlogPostType = {
	tags: string[];
	slug: string;
	title: string;
	content: string;
	published: string;
	visible: boolean;
	updated?: string;
	author: string;
	meta?: any;
};
