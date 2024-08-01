import { CoffeeFactory } from './CoffeeFactory';
import { HotDrink } from './HotDrink';
import { TeaFactory } from './TeaFactory';

type HotDrinkFactory = {
  coffee: CoffeeFactory;
  tea: TeaFactory;
};

type Beverage = 'coffee' | 'tea';

export class HotDrinkMachine {
  private factories: HotDrinkFactory;
  constructor() {
    this.factories = {
      coffee: new CoffeeFactory(),
      tea: new TeaFactory(),
    };
  }

  interact(
    consumer: (drink: HotDrink) => void,
    beverage: Beverage,
    amount: number
  ) {
    const drink = this.factories[beverage].prepare(amount);
    consumer(drink);
  }
}
