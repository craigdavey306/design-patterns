import { Beverage } from './Beverage';

const DECAFE_COST = 0.89;

export class Decaf extends Beverage {
  constructor() {
    super('Decaf');
  }

  cost() {
    return DECAFE_COST;
  }
}
