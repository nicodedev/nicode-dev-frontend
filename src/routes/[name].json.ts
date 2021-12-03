import { consultants } from '$lib/db';

export const load = async ({ page }) => {
	// look up the consultant, ignore case
	const consultant: ConsultantType = consultants.find(
		(c) => c.name.toLowerCase() === page.params.name.toLowerCase()
	);

	return { props: { consultant }, status: consultant ? 200 : 404 };
};
