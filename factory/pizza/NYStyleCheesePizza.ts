import { Pizza } from './Pizza';

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super('NY Style Cheese Pizza', 'Thin Crust Dough', 'Marinara Sauce', [
      'Grated Reggiano Cheese',
    ]);
  }
}
