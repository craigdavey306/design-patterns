export class Matrix {
  constructor(private data: string[][] = []) {}

  private checkOutOfBounds(row: number, column: number) {
    if (row >= this.data.length || column >= this.data[row].length) {
      throw new RangeError('Out of bounds');
    }
  }

  get(row: number, column: number) {
    this.checkOutOfBounds(row, column);

    return this.data[row][column];
  }

  set(row: number, column: number, value: string) {
    this.checkOutOfBounds(row, column);

    this.data[row][column] = value;
  }

  *[Symbol.iterator]() {
    let nextRow = 0;
    let nextCol = 0;

    while (nextRow !== this.data.length) {
      yield this.data[nextRow][nextCol];

      if (nextCol === this.data[nextRow].length - 1) {
        nextRow++;
        nextCol = 0;
      } else {
        nextCol++;
      }
    }
  }
}
