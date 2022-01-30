import { consultants as _consultants } from '$lib/_db';

export const get = async () => {
	const consultants = _consultants.filter((consultant) => consultant.visible);

	return { body: { consultants } };
};
