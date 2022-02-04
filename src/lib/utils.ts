import { browser } from '$app/env';

class Debounce {
	func: Function;
	cooldown: number;
	t: number | NodeJS.Timeout;
	inFront: boolean;
	canExecute: boolean;
	constructor(func: Function, cooldown: number, throttle: boolean = false) {
		this.func = func;
		this.cooldown = cooldown;
		this.inFront;
	}
	clear = () => {
		clearTimeout(this.t as NodeJS.Timeout);
	};
	execute = () => {
		this.clear();
		this.func();
		this.canExecute = false;
	};
	call = () => {
		this.clear();
		this.canExecute = true;
		this.t = setTimeout(this.execute, this.cooldown);
	};
}

function* generateId(initial: number = 0) {
	let id = initial;
	while (true) {
		yield id++;
	}
}

function clamp(value: number, min: number, max: number) {
	return Math.max(min, Math.min(value, max));
}

function prettyTime(ms: number) {
	let delta = ms;
	const days = Math.floor(delta / (1000 * 60 * 60 * 24));
	delta -= days * (1000 * 60 * 60 * 24);
	const hours = Math.floor(delta / (1000 * 60 * 60));
	delta -= hours * (1000 * 60 * 60);
	const minutes = Math.floor(delta / (1000 * 60));
	delta -= minutes * (1000 * 60);
	const seconds = Math.floor(delta / 1000);
	delta -= seconds * 1000;
	const milliseconds = Math.floor(delta);

	return {
		days,
		hours,
		minutes,
		seconds,
		milliseconds
	};
}

function getCssVariable(name: string, node) {
	if (!browser || !name) return;
	return window.getComputedStyle(node || document.documentElement).getPropertyValue(name);
}

export { Debounce, generateId, clamp, prettyTime, getCssVariable };
