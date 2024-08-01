import { NYStyleCheesePizza } from './NYStyleCheesePizza';
import { NYStyleVeggiePizza } from './NYStyleVeggiePizza';
import { Pizza } from './Pizza';
import { PizzaStore } from './PizzaStore';

export class NYPizzaStore extends PizzaStore {
  constructor() {
    super();
  }

  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'veggie':
        return new NYStyleVeggiePizza();
      default:
        return new NYStyleCheesePizza();
    }
  }
}
