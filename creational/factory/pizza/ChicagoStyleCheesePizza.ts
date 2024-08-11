import { Pizza } from './Pizza';

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super(
      'Chicago Style Deep Dish Cheese Pizza',
      'Extra Thick Crust Dough',
      'Plum Tomato Sauce',
      ['Shredded Mozzarella Cheese']
    );
  }

  cut(): void {
    console.log('Cutting pizza into square slices');
  }
}
