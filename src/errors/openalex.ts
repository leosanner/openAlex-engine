export class EmptyNecessaryParamsError extends Error {
	constructor() {
		super("Invalid ou empty params received");
		this.name = "EmptyNecessaryParamsError";
	}
}
