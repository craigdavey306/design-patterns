import { Calculator } from './Calculator.js';

// Uses composition to decorate the Stack calculator.
export class EnhancedCalculator implements Calculator {
  constructor(private calculator: Calculator) {}

  putValue(value: number) {
    this.calculator.putValue(value);
  }

  getValue() {
    return this.calculator.getValue();
  }

  peekValue(): number | undefined {
    return this.calculator.peekValue();
  }

  clear() {
    this.calculator.clear();
  }

  add() {
    return this.calculator.add();
  }

  subtract() {
    return this.calculator.subtract();
  }

  multiply() {
    return this.calculator.multiply();
  }

  divide(): number {
    // additional validation logic
    const divisor = this.calculator.peekValue();
    if (divisor === 0) {
      throw Error('Division by 0');
    }

    // delegate to the subject if valid divisor
    return this.calculator.divide();
  }
}
