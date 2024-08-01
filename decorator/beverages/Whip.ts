import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

const WHIP_COST = 0.2;

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  get description(): string {
    return `${this.beverage.description}, Whip`;
  }

  cost(): number {
    return this.beverage.cost() + WHIP_COST;
  }
}
