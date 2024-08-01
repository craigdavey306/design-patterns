import { Pizza } from './Pizza';

export class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super('NY Style Veggie Pizza', 'Thin Crust Dough', 'Marinara Sauce', [
      'Green Bell Peppers',
      'Mushrooms',
      'Red Onion',
      'Black Olives',
      'Broccoli',
    ]);
  }
}
