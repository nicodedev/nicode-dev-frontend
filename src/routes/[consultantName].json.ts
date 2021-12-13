import { consultants } from '$lib/db';

export const get = async ({ params }) => {
	// look up the consultant, ignore case
	const slug = params ? params.consultantName.toLowerCase() : null;

	const consultant: ConsultantType = slug
		? consultants.find(({ name }) => {
				return name.toLowerCase() === slug;
		  })
		: null;

	if (consultant) {
		return { body: { consultant } };
	}
};
