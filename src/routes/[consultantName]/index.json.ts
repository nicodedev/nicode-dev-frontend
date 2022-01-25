import { consultants as _consultants } from '$lib/_db';

export const get = async ({ params }) => {
	console.log('!!!params: ', params);

	const consultant = _consultants.find(({ name }) => {
		return name.toLowerCase() === params.consultantName.toLowerCase();
	});

	if (!consultant || !consultant.visible) return;

	return { body: { consultant } };
};
