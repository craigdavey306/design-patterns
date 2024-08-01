import { Beverage } from './Beverage';

const ESPRESSO_COST = 1.99;

export class Espresso extends Beverage {
  constructor() {
    super('Espresso');
  }

  cost() {
    return ESPRESSO_COST;
  }
}
