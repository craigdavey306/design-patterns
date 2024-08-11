// Uses the Proxy class to decorate the Calculator class.

import { Calculator } from './Calculator';

const enhancedCalculatorHandler: ProxyHandler<Calculator> = {
  get(target, property: keyof Calculator) {
    if (property === 'divide') {
      // modified divide method
      return () => {
        const divisor = target.peekValue();

        if (divisor === 0) {
          throw Error('Division by 0');
        }

        return target.divide();
      };
    }

    return target[property];
  },
};

export function createEnhancedCalculator(calculator: Calculator) {
  return new Proxy(calculator, enhancedCalculatorHandler);
}
