type LocationType = {
	lat: number;
	lon: number;
	altitude: number;
};

const locations = {
	bergen: {
		lat: 60.397076,
		lon: 5.324383,
		altitude: 5
	},
	oslo: {
		lat: 59.913869,
		lon: 10.752245,
		altitude: 5
	}
};

/**
 * calls api.met
 * https://api.met.no/weatherapi/locationforecast/2.0/documentation#!/data/get_compact
 * @param lat
 * @param lon
 * @param altitude
 * @returns {Promise<any>} returns a promise with the weather data
 */
const forecast = async ({ lat, lon, altitude }: LocationType): Promise<any> => {
	return fetch(
		`https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=${altitude}&lat=${lat}&lon=${lon}`
	).then((response) => {
		return response.json();
	});
};

let LAST_CALL: number = 0; //performance.now();

export async function get() {}
