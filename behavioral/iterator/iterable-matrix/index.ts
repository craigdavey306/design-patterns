import { Matrix } from './Matrix.js';

const matrix2x2 = new Matrix([
  ['11', '12'],
  ['21', '22'],
]);

for (const matrix of matrix2x2) {
  console.log(matrix);
}
