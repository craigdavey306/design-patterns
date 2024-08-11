import { HotDrink } from './HotDrink';

export class Tea extends HotDrink {
  consume(): void {
    console.log('This tea is nice with lemon!');
  }
}
