import { HotDrink } from './HotDrink';
import { HotDrinkFactory } from './HotDrinkFactory';
import { Tea } from './Tea';

export class TeaFactory extends HotDrinkFactory {
  prepare(amount: number): HotDrink {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}
