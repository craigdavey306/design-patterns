import { Beverage } from './Beverage';

const HOUSE_BLEND_COST = 0.89;

export class HouseBlend extends Beverage {
  constructor() {
    super('House Blend');
  }

  cost() {
    return HOUSE_BLEND_COST;
  }
}
