export class EmptyNecessaryParamsError extends Error {
	constructor() {
		super("Invalid or empty params received");
		this.name = "EmptyNecessaryParamsError";
	}
}
