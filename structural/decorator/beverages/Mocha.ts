import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

const MOCHA_COST = 0.2;

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  get description(): string {
    return `${this.beverage.description}, Mocha`;
  }

  cost(): number {
    return this.beverage.cost() + MOCHA_COST;
  }
}
