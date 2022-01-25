import { consultants as _consultants } from '$lib/_db';

export const get = async ({ params }) => {
	const consultant = _consultants.find(({ name }) => {
		return name.toLowerCase() === params.consultantName.toLowerCase();
	});

	if (!consultant.visible) return;

	return { body: { consultant } };
};
