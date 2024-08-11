import { HotDrink } from './HotDrink';
import { HotDrinkMachine } from './HotDrinkMachine';

const consumer = (drink: HotDrink) => drink.consume();
const machine = new HotDrinkMachine();
machine.interact(consumer, 'coffee', 100);
machine.interact(consumer, 'tea', 50);
machine.interact(consumer, 'coffee', 150);
