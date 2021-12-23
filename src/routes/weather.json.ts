// this endpoint is disabled
// to enable it, remove the underscore in the file name

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

const apiUrl = ({ lat, lon, altitude }: LocationType) => {
	return `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}&altitude=${altitude}`;
};

const thirtyMinutes = 1000 * 60 * 30;
const lastCall = new Date(0);
let weather;

export async function get() {
	const now = new Date();

	if (now.getTime() - lastCall.getTime() > thirtyMinutes) {
		const res = await fetch(apiUrl(locations.bergen), {
			headers: {
				'User-Agent': 'weather-endpoint-1.0' /** required by api.met.no */
			}
		});
		console.log(res);

		if (res.ok) {
			try {
				weather = await res.json();
			} catch (e) {
				console.error('weather api: ', e);
			}
		} else {
			return {
				status: res.status,
				body: {
					error: 'Could not fetch weather'
				}
			};
		}

		lastCall.setTime(now.getTime());
	}

	const fc = weather?.properties?.timeseries[0].data;
	const symbol = fc?.next_1_hours?.summary?.symbol_code;
	const temperature = fc?.instant?.details?.air_temperature;

	return { body: { symbol, temperature } };
}
