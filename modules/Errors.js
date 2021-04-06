export class FruitError extends Error {
    constructor(message) {
        super(message);
        this.name = "FruitError";
    }
}

