/// <reference types="@sveltejs/kit" />

type ConsultantType = {
	shortName: string;
	headshot: string;
	intro: string;
	availability: string;
	focus: string;
	projects: ProjectType[];
};

type ProjectType = {
	title: string;
	description: string;
	period: Period;
	tags: string[];
};

type PeriodType = {
	from: Date;
	to: Date;
};
