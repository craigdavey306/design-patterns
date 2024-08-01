import { Beverage } from './Beverage';

export abstract class CondimentDecorator extends Beverage {
  constructor(public readonly beverage: Beverage) {
    super();
  }

  get description(): string {
    return this.beverage.description;
  }
}
