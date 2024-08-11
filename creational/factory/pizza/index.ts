import { ChicagoPizzaStore } from './ChicagoPizzaStore';
import { NYPizzaStore } from './NYPizzaStore';

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

nyStore.orderPizza('cheese');
console.log('\n\n------\n\n');
chicagoStore.orderPizza('cheese');
