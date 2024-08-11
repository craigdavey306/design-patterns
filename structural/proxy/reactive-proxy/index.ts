import { createObservable } from './create-observable.js';
import { Invoice } from './Invoice.js';

function calculateTotal(invoice: Invoice) {
  return invoice.subtotal - invoice.discount + invoice.tax;
}

const invoice: Invoice = {
  subtotal: 100,
  discount: 10,
  tax: 20,
};

let total = calculateTotal(invoice);
console.log(`Starting total: ${total}`);

// demonstrates the Change Observer pattern
// check out the Reactive Manifesto (https://www.reactivemanifesto.org/) for more information
const obsInvoice = createObservable(
  invoice,
  (arg: { prop: keyof Invoice; prev: number; curr: number }) => {
    total = calculateTotal(invoice);
    console.log(
      `Total: ${total} (${arg.prop} changed: ${arg.prev} -> ${arg.curr})`
    );
  }
);

obsInvoice.subtotal = 200;
obsInvoice.discount = 20;
obsInvoice.discount = 20; // should be no change; shouldn't notify
obsInvoice.tax = 30;
console.log(`Final total: ${total}`);
