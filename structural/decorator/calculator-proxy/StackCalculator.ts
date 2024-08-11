import { Calculator } from './Calculator.js';

export class StackCalculator implements Calculator {
  private stack: number[] = [];

  constructor() {}

  putValue(value: number) {
    this.stack.push(value);
  }

  getValue(): number {
    return this.stack.pop() || 0;
  }

  peekValue(): number | undefined {
    return this.stack[this.stack.length - 1];
  }

  clear() {
    this.stack = [];
  }

  add() {
    const addend2 = this.getValue();
    const addend1 = this.getValue();
    const result = addend1 + addend2;

    this.putValue(result);

    return result;
  }

  subtract() {
    const minuend = this.getValue();
    const subtrahend = this.getValue();
    const difference = minuend - subtrahend;

    this.putValue(difference);

    return difference;
  }

  multiply() {
    const multiplicand = this.getValue();
    const multiplier = this.getValue();
    const result = multiplier * multiplicand;

    this.putValue(result);

    return result;
  }

  divide() {
    const divisor = this.getValue();
    const dividend = this.getValue();
    const result = dividend / divisor;

    this.putValue(result);

    return result;
  }
}
