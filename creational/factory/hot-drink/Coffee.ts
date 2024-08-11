import { HotDrink } from './HotDrink';

export class Coffee extends HotDrink {
  consume(): void {
    console.log('This coffee is delicious!');
  }
}
