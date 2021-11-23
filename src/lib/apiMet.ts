type Location = {
	lat: number;
	lon: number;
	altitude: number;
};

/**
 * calls api.met
 * https://api.met.no/weatherapi/locationforecast/2.0/documentation#!/data/get_compact
 * @param lat
 * @param lon
 * @param altitude
 * @returns
 */
export const forecast = ({ lat, lon, altitude }: Location) => {
	return fetch(
		`https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=${altitude}&lat=${lat}&lon=${lon}`
	).then((response) => {
		return response.json();
	});
};

export const locations = {
	bergen: {
		lat: 60.397076,
		lon: 5.324383,
		altitude: 5
	},
	oslo: {
		lat: 59.913869,
		lon: 10.752245,
		altitude: 5
	},
	trondheim: {
		lat: 63.436092,
		lon: 10.395075,
		altitude: 5
	},
	tromso: {
		lat: 69.6489,
		lon: 18.95,
		altitude: 5
	},
	stavanger: {
		lat: 58.97,
		lon: 5.73,
		altitude: 5
	}
};
