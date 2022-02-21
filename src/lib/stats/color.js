const colorSpace = [
	'#283c55',
	'#355070',
	'#6d597a',
	'#915f78',
	'#b56576',
	'#e56b6f',
	'#e77c76',
	'#e88c7d',
	'#eaac8b',
	'#eebba0'
];

export class ColorMap {
	constructor() {
		this.map = {};
	}
	byName(name) {
		if (this.map[name]) {
			return this.map[name];
		}
		const color = colorSpace[Object.keys(this.map).length % colorSpace.length];
		this.map[name] = color;
		return color;
	}
}
