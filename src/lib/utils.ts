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

export { Debounce };
