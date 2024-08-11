import { Coffee } from './Coffee';
import { HotDrink } from './HotDrink';
import { HotDrinkFactory } from './HotDrinkFactory';

export class CoffeeFactory extends HotDrinkFactory {
  prepare(amount: number): HotDrink {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}
