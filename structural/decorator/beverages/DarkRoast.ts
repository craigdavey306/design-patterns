import { Beverage } from './Beverage';

const DARK_ROAST_COST = 0.99;

export class DarkRoast extends Beverage {
  constructor() {
    super('Dark Roast');
  }

  cost() {
    return DARK_ROAST_COST;
  }
}
