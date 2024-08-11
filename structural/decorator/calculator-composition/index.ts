// Demonstrates decorating one class with another. The EnhancedCalculator class
// provides additional functionality for the divide function.

import { StackCalculator } from './StackCalculator.js';
import { EnhancedCalculator } from './EnhancedCalculator.js';

const calculator = new StackCalculator();
const enhancedCalculator = new EnhancedCalculator(calculator);

enhancedCalculator.putValue(4);
enhancedCalculator.putValue(3);
console.log(enhancedCalculator.add()); // 4+3 = 7
enhancedCalculator.putValue(2);
console.log(enhancedCalculator.multiply()); // 7*2 = 14
// enhancedCalculator.putValue(0);

// try {
//   enhancedCalculator.divide();
// } catch (err) {
//   console.log(err);
// }
