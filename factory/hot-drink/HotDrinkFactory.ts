import { HotDrink } from './HotDrink';

export abstract class HotDrinkFactory {
  abstract prepare(amount: number): HotDrink;
}
