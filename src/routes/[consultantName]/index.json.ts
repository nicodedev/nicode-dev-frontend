import type { RequestHandler } from '@sveltejs/kit';
import { consultants as _consultants } from '$lib/_db';

export const get: RequestHandler = async (ev) => {
	const consultant = _consultants.find(({ name }) => {
		return name.toLowerCase() === ev.params.consultantName.toLowerCase();
	});

	if (!consultant || !consultant.visible) return;

	return { body: { consultant } };
};
