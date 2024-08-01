export abstract class Pizza {
  constructor(
    public name = 'Unknown Pizza',
    public dough = 'Unknown Dough',
    public sauce = 'Unknown Sauce',
    public toppings: string[] = []
  ) {}

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log(`Tossing ${this.dough}`);
    console.log(`Adding ${this.sauce}`);
    console.log(`Adding toppings...`);
    this.toppings.forEach((topping) => {
      console.log(` ${topping}`);
    });
  }

  bake(): void {
    console.log('Bake for 25 minutes at 350 degrees');
  }

  cut(): void {
    console.log('Cutting the pizza into slices');
  }

  box(): void {
    console.log('Placing pizza in a box');
  }
}
