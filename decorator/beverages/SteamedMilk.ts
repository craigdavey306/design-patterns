import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

const STEAMED_MILK_COST = 0.2;

export class SteamedMilk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  get description(): string {
    return `${this.beverage.description}, Steamed Milk`;
  }

  cost(): number {
    return this.beverage.cost() + STEAMED_MILK_COST;
  }
}
