import { ChicagoStyleCheesePizza } from './ChicagoStyleCheesePizza';
import { Pizza } from './Pizza';
import { PizzaStore } from './PizzaStore';

export class ChicagoPizzaStore extends PizzaStore {
  constructor() {
    super();
  }

  protected createPizza(type: string): Pizza {
    switch (type) {
      default:
        return new ChicagoStyleCheesePizza();
    }
  }
}
