class Convert {
  private celsius: number;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  Fahrenheit(): number {
    return (this.celsius * 9) / 5 + 32;
  }

  Kelvin(): number {
    return this.celsius + 273.15;
  }
}
const temp = new Convert(25);

console.log(`Fahrenheit: ${temp.Fahrenheit()}`);
console.log(`Kelvin: ${temp.Kelvin()}`);
