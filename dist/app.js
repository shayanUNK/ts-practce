"use strict";
class Convert {
    celsius;
    constructor(celsius) {
        this.celsius = celsius;
    }
    Fahrenheit() {
        return (this.celsius * 9) / 5 + 32;
    }
    Kelvin() {
        return this.celsius + 273.15;
    }
}
const temp = new Convert(25);
console.log(`Fahrenheit: ${temp.Fahrenheit()}`);
console.log(`Kelvin: ${temp.Kelvin()}`);
//# sourceMappingURL=app.js.map