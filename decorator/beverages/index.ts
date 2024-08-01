import { DarkRoast } from './DarkRoast';
import { Espresso } from './Espresso';
import { Mocha } from './Mocha';
import { Whip } from './Whip';

const espresso = new Espresso();
console.log(`${espresso.description}, $${espresso.cost()}`);

let beverage = new DarkRoast();
// add decorators
beverage = new Mocha(beverage);
beverage = new Whip(beverage);
// display description with the aggregate cost
// expect it to display: 'Dark Roast, Mocha, Whip $1.39'
console.log(`${beverage.description}, $${beverage.cost()}`);
