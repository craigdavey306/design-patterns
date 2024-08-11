export interface Calculator {
  putValue: (value: number) => void;
  getValue: () => number;
  peekValue: () => number | undefined;
  clear: () => void;
  divide: () => number;
  multiply: () => number;
  add: () => number;
  subtract: () => number;
}
