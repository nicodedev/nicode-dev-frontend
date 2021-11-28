/// <reference types="@sveltejs/kit" />

type ConsultantType = {
	name: string;
	headshot: string;
	intro: Intro;
	availability: string;
	focus: string;
	projects: ProjectType[];
};

type IntroType = {
	preamble: string;
	email: string;
	mobile: string;
	linkedin: string;
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
