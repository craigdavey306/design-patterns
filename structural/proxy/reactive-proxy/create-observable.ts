import { Invoice } from './Invoice';

// simplified example of implementing the Change Observer pattern.
export function createObservable(
  target: Invoice,
  observer: (arg: { prop: keyof Invoice; prev: number; curr: number }) => void
): Invoice {
  const observable = new Proxy(target, {
    set(obj, prop: keyof Invoice, value: number) {
      if (value !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;

        observer({ prop, prev, curr: value });
      }
      return true;
    },
  });

  return observable;
}
